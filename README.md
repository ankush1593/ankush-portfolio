# Ankush Srivastava — Personal Website

A clean, minimal personal portfolio and blog built with Next.js 14, Tailwind CSS, and MDX.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Blog**: MDX via `next-mdx-remote`
- **Fonts**: Inter + JetBrains Mono (Google Fonts)
- **Deployment**: Vercel

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          # Root layout with Navbar + Footer
  page.tsx            # Home page (all sections)
  blog/
    page.tsx          # Blog index
    [slug]/page.tsx   # Individual post
  globals.css         # Tailwind base + prose styles

components/sections/
  Navbar.tsx
  Hero.tsx            # Animated hero with SVG avatar
  About.tsx           # Personal story + values
  Signature.tsx       # 3 signature problems solved
  Experience.tsx      # Timeline
  Skills.tsx          # Skill bars grouped by domain
  BlogTeaser.tsx      # 3 latest posts preview
  Contact.tsx         # Form + contact links
  Footer.tsx

content/blog/         # MDX blog posts (add new ones here)
lib/posts.ts          # Blog post reading utilities
```

## Adding a new blog post

Create a file in `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
excerpt: "A one-sentence summary shown in previews."
date: "2025-07-01"
tag: "Architecture"
readTime: "6 min"
---

Your content here in Markdown...
```

It will automatically appear on `/blog`.

## Customisation checklist

- [ ] Update your LinkedIn URL in `Navbar.tsx` and `Footer.tsx`
- [ ] Add Formspree / Resend endpoint in `Contact.tsx` (`handleSubmit`)
- [ ] Replace placeholder LinkedIn href in `Hero.tsx` social links
- [ ] Update `metadata` in `app/layout.tsx` with your final domain
- [ ] Add Open Graph image to `public/` and reference in layout metadata

## Deployment

Push to your GitHub repo — Vercel auto-deploys on every push to `main`.
