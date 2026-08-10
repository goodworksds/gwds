# Good Works Disability Services — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for
`goodworksdisabilityservices.com.au`, statically exported and deployed to
GitHub Pages.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`) — no server, no database

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (GitHub Pages)

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which runs `npm run build` (static export to `out/`) and publishes it via
GitHub Pages. In the repo's **Settings → Pages**, set the source to
**GitHub Actions**.

The site is served at the custom domain in `public/CNAME`
(`goodworksdisabilityservices.com.au`) — point that domain's DNS at GitHub
Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
`public/.nojekyll` disables Jekyll processing so Next.js's `_next/` asset
folder is served correctly.

## Contact form

GitHub Pages can only serve static files — it can't run a backend, so the
contact form (`src/components/ContactForm.tsx`) builds a `mailto:` link from
the filled-in fields and opens the visitor's email app, addressed to
`hello@goodworksdisabilityservices.com.au`. No server, database or API route
is involved.

If you later move to a host that supports server code (e.g. Vercel, Netlify),
you could swap this for a real backend — a serverless function or API route
that saves submissions to a database — instead of `mailto`.

## Project structure

```
src/
  app/
    page.tsx                  Home
    about-us/page.tsx         About Us overview
    about-us/[section]/       Our Story, Mission, Vision, Our Values,
                               Meet Our Team, Why Choose Us — one page each
    services/page.tsx         Services overview
    services/[slug]/page.tsx  Individual service detail pages
    ndis-information/page.tsx NDIS explainer + FAQ
    resources/page.tsx
    careers/page.tsx
    contact/page.tsx          Contact page (form + details)
  components/                 Header, Footer, Buttons, cards, form, etc.
  lib/
    site-data.ts               All page copy/content in one place
    utils.ts
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
- "Meet Our Team" (`/about-us/meet-our-team`) describes team roles generally
  — add real names/photos when ready.

## Build

```bash
npm run build   # static export to ./out
npx serve out   # preview the exported site locally
```
