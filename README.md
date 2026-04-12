# AI Tools Hub

A high-quality SEO-driven website that ranks for commercial and informational "best tools" queries, compares AI tools honestly, and links naturally to our products.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Monetization:** Google AdSense (env-var configured)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production site URL for canonical/OG tags |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense publisher ID |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── best/         # "Best tools" category pages
│   ├── blog/         # Blog index + article pages
│   ├── compare/      # Tool comparison pages
│   ├── categories/   # All categories index
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── privacy/      # Privacy policy
│   └── terms/        # Terms of service
├── components/       # Reusable UI components
├── data/             # Static data (tools, comparisons, blog posts)
└── lib/              # Utility functions
```

## Deployment

Push to GitHub and connect to Vercel for automatic deployments.

## Built By

[Abdullah Shareef / Shareef Studios](https://shareefstudios.com)
