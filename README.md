# Good Works Disability Services — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for
`goodworksdisabilityservices.com.au`, deployed on Vercel with a contact form
that saves to MongoDB and emails the team via Resend.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Mongoose (MongoDB) for contact form submissions
- Resend for the email notification sent on each submission
- Zod for server-side form validation

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set these in `.env.local` for local dev, and in the Vercel project's
**Settings → Environment Variables** for production:

| Variable | Required | Notes |
| --- | --- | --- |
| `MONGODB_URI` | Yes | Connection string (e.g. a MongoDB Atlas cluster). |
| `RESEND_API_KEY` | No | Without it, submissions still save to MongoDB but no email is sent (logged as a warning). Get one at [resend.com](https://resend.com). |
| `CONTACT_EMAIL_TO` | No | Defaults to `admin@goodworksdisabilityservices.com.au`. |
| `CONTACT_EMAIL_CC` | No | Defaults to `goodworksds@gmail.com`. |
| `CONTACT_EMAIL_FROM` | No | Must be an address on a domain verified at [resend.com/domains](https://resend.com/domains). Until `goodworksdisabilityservices.com.au` is verified there, Resend runs in **sandbox mode** and can only deliver to the email address the Resend account itself was signed up with — not `CONTACT_EMAIL_TO`/`CC`, and not any other recipient. Defaults to Resend's shared testing sender, which has the same sandbox restriction. |

## Deployment (Vercel)

1. Import this repo into [Vercel](https://vercel.com/new) (Next.js is
   auto-detected, no config needed).
2. Add the environment variables above in the Vercel project settings.
3. In **Settings → Domains**, add `goodworksdisabilityservices.com.au` (and
   `www` if needed) and point your DNS at Vercel per their on-screen
   instructions.
4. Every push to `main` deploys automatically.

This project previously deployed as a static export to GitHub Pages, which
can't run the `/api/contact` route, MongoDB, or email sending — that's why
it moved to Vercel.

## Contact form

`src/components/ContactForm.tsx` POSTs to `src/app/api/contact/route.ts`,
which:

1. Validates the payload with Zod (and silently drops honeypot-triggered
   spam without saving it).
2. Saves the submission to MongoDB via the `ContactSubmission` model
   (`src/models/ContactSubmission.ts`).
3. Emails `CONTACT_EMAIL_TO` (cc `CONTACT_EMAIL_CC`) via Resend with the
   submission details. If `RESEND_API_KEY` isn't set, the domain in
   `CONTACT_EMAIL_FROM` isn't verified in Resend yet, or the send otherwise
   fails, the submission is still saved — email delivery failure never
   blocks storing the enquiry.

## Project structure

```
src/
  app/
    page.tsx                  Home
    about-us/page.tsx         About Us (single page, anchor-linked sections)
    services/page.tsx         Services overview
    services/[slug]/page.tsx  Individual service detail pages
    ndis-information/page.tsx NDIS explainer + FAQ
    resources/page.tsx
    careers/page.tsx
    contact/page.tsx          Contact page (form + details)
    api/contact/route.ts      POST handler — validates, saves to MongoDB, emails via Resend
  components/                 Header, Footer, Buttons, cards, form, etc.
  lib/
    site-data.ts               All page copy/content in one place
    mongodb.ts                  Cached Mongoose connection helper
    utils.ts
  models/
    ContactSubmission.ts        Mongoose schema
```

Site copy, services, FAQs, testimonials, career listings, etc. all live in
`src/lib/site-data.ts` — edit that file to update content across the site.

## Content notes

- Resource "documents" on `/resources` are listed but not linked to real PDF
  files yet — add files under `public/` and link them once available.
- "Meet Our Team" (in `/about-us`) describes team roles generally — add real
  names/photos when ready.

## Build

```bash
npm run build
npm run start
```
