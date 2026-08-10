# Good Works Disability Services — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for
`goodworksdisabilityservices.com.au`, with a contact form that saves
submissions to MongoDB.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Mongoose (MongoDB) for the contact form
- Zod for server-side form validation

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in MONGODB_URI
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## MongoDB setup

1. Create a database (local MongoDB, or a free cluster on
   [MongoDB Atlas](https://www.mongodb.com/atlas)).
2. Copy `.env.local.example` to `.env.local` and set `MONGODB_URI` to your
   connection string, e.g.:
   ```
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/goodworks?retryWrites=true&w=majority
   ```
3. Restart `npm run dev`. Submitting the contact form at `/contact` will
   create documents in the `contactsubmissions` collection with this shape:
   ```ts
   {
     name: string;
     email: string;
     phone?: string;
     message: string;
     service?: string;      // service slug the enquiry relates to
     source: "website-contact-form";
     createdAt: Date;
     updatedAt: Date;
   }
   ```
   The Mongoose model lives at `src/models/ContactSubmission.ts` and the API
   route at `src/app/api/contact/route.ts` — adjust either to add fields,
   send email notifications, etc.

No `MONGODB_URI` is committed anywhere in this repo — `.env.local` is
git-ignored by default.

## Project structure

```
src/
  app/
    page.tsx                  Home
    about-us/page.tsx
    services/page.tsx         Services overview
    services/[slug]/page.tsx  Individual service detail pages
    ndis-information/page.tsx NDIS explainer + FAQ
    resources/page.tsx
    careers/page.tsx
    contact/page.tsx          Contact page (form + details)
    api/contact/route.ts      POST handler — validates + saves to MongoDB
  components/                 Header, Footer, Buttons, cards, form, etc.
  lib/
    site-data.ts               All page copy/content in one place
    mongodb.ts                 Cached Mongoose connection helper
    utils.ts
  models/
    ContactSubmission.ts       Mongoose schema
```

Site copy, services, FAQs, testimonials, career listings, etc. all live in
`src/lib/site-data.ts` — edit that file to update content across the site.

## Content notes

- Phone number, address and some listings are placeholders carried over from
  the design template — replace them in `src/lib/site-data.ts` with real
  details before launch.
- `public/hero-support.svg` is a placeholder illustration — swap in real
  photography when available.
- Resource "documents" on `/resources` are listed but not linked to real PDF
  files yet — add files under `public/` and link them once available.

## Build

```bash
npm run build
npm run start
```
