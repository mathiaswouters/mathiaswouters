# mathiaswouters

Personal portfolio for [Mathias Wouters](https://mathiaswouters.com) — IT consultant specializing in cloud, DevOps, and Linux.

## Features

- About page with services, skills, experience, certifications, and case studies
- Products page for SaaS apps and side projects (data-driven, empty state when none)
- Light and dark mode (follows system preference)
- Responsive layout built with Tailwind CSS
- SEO: sitemap and robots.txt

## Stack

Next.js · React · TypeScript · Tailwind CSS · Framer Motion

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Run production build     |
| `npm run lint`  | Run ESLint               |

## Project structure

```
app/                 Next.js app router (/, /products, /contact)
components/
  portfolio/         Portfolio views and layout
  ui/                Shared UI components
content/
  profile.ts         About page content
  products.ts        Product listings
lib/                 Utilities
public/              Static assets
```

## Adding content

- **About**: edit `content/profile.ts`
- **Products**: add entries to `content/products.ts`
