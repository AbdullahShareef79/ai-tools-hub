# AI Tools Hub â€” Scaling Guide

> How to add new pages in minutes using just data files and reusable templates.

---

## Architecture Overview

```
src/
â”œâ”€â”€ components/      â† Atomic UI blocks (StarRating, ProsCons, FAQAccordion, â€¦)
â”œâ”€â”€ templates/       â† Page-level templates (BestPageTemplate, ComparePageTemplate, BlogPostTemplate)
â”œâ”€â”€ data/            â† Content lives here â€” add an object, get a page
â”œâ”€â”€ app/             â† Route files â€” ultra-thin, just wire data â†’ template
â””â”€â”€ lib/             â† SEO helpers (buildMetadata)
```

**The rule:** all page content is defined in `src/data/*.ts`. Route files in `src/app/` simply look up data and render a template. To add a new page, you only touch the data file.

---

## 1. Add a New "Best X Tools" Page

### Step 1 â€” Open `src/data/best-pages.ts`

Add a new object to the `bestPages` array:

```ts
{
  slug: 'ai-writing-tools',                       // â†’ /best/ai-writing-tools
  categorySlug: 'ai-writing-tools',                // match a category in categories.ts
  title: 'Best AI Writing Tools',
  metaTitle: 'Best AI Writing Tools in 2026 â€” Top 5 Reviewed',
  metaDescription: 'We tested the top AI writing tools...',
  intro: 'AI writing tools can help you...',
  buyingGuide: 'When choosing an AI writing tool, consider **accuracy**, **tone control**, and **integrations**.',
  tools: [
    {
      name: 'ScribAI',
      slug: 'scribai',
      description: 'ScribAI uses advanced AI to...',
      pros: ['Fast dictation', 'Cross-platform', 'Affordable'],
      cons: ['No offline mode'],
      bestFor: 'Writers who dictate first drafts',
      url: 'https://scrib-ai-six.vercel.app',
      isOurProduct: true,
      rating: 4.7,
      pricing: 'Free / $9.99/mo',
      features: ['AI Dictation', 'Grammar Fix', 'Export'],
    },
    // ... add 4 more tools
  ],
  faq: [
    { question: 'What is the best AI writing tool?', answer: 'It depends on...' },
    // ... 5+ more FAQs for rich snippets
  ],
  relatedComparisons: ['scribai-vs-voicescribe'],
  relatedCategories: ['voice-to-text-apps'],
}
```

### Step 2 â€” Add matching category in `src/data/categories.ts`

```ts
{
  slug: 'ai-writing-tools',
  name: 'AI Writing Tools',
  description: 'Compare the best AI-powered writing assistants.',
  metaTitle: 'Best AI Writing Tools (2026)',
  metaDescription: '...',
  icon: 'âœï¸',
  toolCount: 5,
}
```

### Step 3 â€” Done!

Run `npm run build` â€” your new page will be generated at `/best/ai-writing-tools` with:
- Full SEO metadata + JSON-LD structured data
- Breadcrumbs with schema markup
- Quick navigation sidebar
- Buying guide section
- Ranked tool cards with ratings, pros/cons, features
- FAQ accordion with FAQPage schema
- Related comparisons + categories
- Ad placements

---

## 2. Add a New Comparison Page

### Open `src/data/comparisons.ts`

Add a new object to the `comparisons` array:

```ts
{
  slug: 'scribai-vs-grammarly',                    // â†’ /compare/scribai-vs-grammarly
  title: 'ScribAI vs Grammarly',
  metaTitle: 'ScribAI vs Grammarly (2026) â€” Which Is Better?',
  metaDescription: 'Head-to-head comparison of ScribAI and Grammarly...',
  intro: 'Both tools help you write better, but...',
  toolA: {
    name: 'ScribAI',
    slug: 'scribai',
    description: '...',
    pros: ['...'],
    cons: ['...'],
    bestFor: '...',
    url: 'https://scrib-ai-six.vercel.app',
    isOurProduct: true,
    rating: 4.7,
    pricing: 'Free / $9.99/mo',
  },
  toolB: {
    name: 'Grammarly',
    slug: 'grammarly',
    description: '...',
    pros: ['...'],
    cons: ['...'],
    bestFor: '...',
    url: 'https://grammarly.com',
    isOurProduct: false,
    rating: 4.5,
    pricing: 'Free / $12/mo',
  },
  features: [
    { feature: 'AI Dictation',   toolA: 'âœ… Built-in',    toolB: 'âŒ No' },
    { feature: 'Grammar Check',  toolA: 'âœ… Advanced',    toolB: 'âœ… Industry-leading' },
    { feature: 'Tone Detection', toolA: 'âœ… Basic',       toolB: 'âœ… Advanced' },
    // ... more rows
  ],
  verdict: 'ScribAI wins for dictation-first writers; Grammarly for pure grammar.',
  verdictDetail: 'If you primarily dictate your writing...',
  relatedSlugs: ['scribai-vs-voicescribe'],
  relatedBestPages: ['ai-writing-tools', 'voice-to-text-apps'],
}
```

**That's it.** The `ComparePageTemplate` handles the VS cards, feature table, verdict box, and cross-links automatically.

---

## 3. Add a New Blog Post

### Open `src/data/blog-posts.ts`

Add a new object to the `blogPosts` array:

```ts
{
  slug: 'ai-writing-tips-2026',                    // â†’ /blog/ai-writing-tips-2026
  title: '10 AI Writing Tips That Actually Work in 2026',
  metaTitle: '10 AI Writing Tips That Actually Work (2026)',
  metaDescription: 'Practical tips for using AI writing tools effectively...',
  excerpt: 'AI can write for you â€” but only if you know how to prompt it right.',
  author: 'AI Tools Hub Editorial',
  publishedAt: '2026-05-01',
  updatedAt: '2026-05-01',
  readingTime: '7 min read',
  tags: ['AI', 'Writing', 'Productivity'],
  relatedBestPages: ['ai-writing-tools'],
  relatedComparisons: ['scribai-vs-grammarly'],
  content: `
    <h2>Tip 1: Start With an Outline</h2>
    <p>Before you ask AI to write, give it structure...</p>
    <!-- use standard HTML â€” the prose-content class styles it beautifully -->
  `,
}
```

**The template adds:** Article JSON-LD, author byline, tags, date, ad placements, related categories, related comparisons, and "More Articles" section.

---

## 4. Available Reusable Components

All components are importable from `@/components`:

| Component | Purpose | Props |
|-----------|---------|-------|
| `PageHeader` | Title + subtitle + badge | `title`, `subtitle`, `badge`, `badgeVariant`, `yearSuffix` |
| `StarRating` | Star rating display | `rating`, `max`, `size`, `showLabel` |
| `ProsCons` | Side-by-side pros/cons | `pros[]`, `cons[]` |
| `FAQAccordion` | Collapsible FAQ with JSON-LD | `items[]`, `title`, `includeJsonLd` |
| `VerdictBox` | Verdict callout | `verdict`, `detail`, `variant` (`banner`/`highlight`) |
| `FeatureTable` | Comparison table | `columns[]`, `rows[]`, `highlightColumn` |
| `ToolRankingCard` | Numbered tool card | `tool`, `rank` |
| `QuickNav` | Anchor link navigation | `items[]` |
| `BuyingGuide` | Buying guide callout | `content` (supports `**bold**`) |
| `AuthorBox` | Author byline + date + tags | `name`, `publishedAt`, `updatedAt`, `readingTime`, `tags` |
| `WhoIsThisFor` | Audience cards grid | `audiences[]` (icon, label, description) |
| `RelatedComparisons` | Cross-link comparison cards | `slugs[]`, `title`, `columns` |
| `RelatedCategories` | Cross-link category links | `slugs[]`, `label`, `variant` (`buttons`/`inline`) |
| `RelatedArticles` | Related blog post cards | `articles[]`, `title`, `columns` |
| `SectionDivider` | Horizontal rule | `spacing` (`sm`/`md`/`lg`) |
| `Breadcrumbs` | Breadcrumb nav with JSON-LD | `items[]` |
| `AdPlaceholder` | Dev ad placeholder | `label` |

### Compose custom pages

You can mix and match these components for unique page layouts:

```tsx
import {
  Breadcrumbs,
  PageHeader,
  WhoIsThisFor,
  FAQAccordion,
  VerdictBox,
  RelatedComparisons,
  AdPlaceholder,
} from '@/components';

export default function CustomPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Custom Page' }]} />
      <PageHeader title="My Custom Tool Roundup" subtitle="..." />
      {/* ... mix any components ... */}
      <WhoIsThisFor audiences={[
        { icon: 'ðŸŽ“', label: 'Students', description: 'Perfect for exam prep' },
        { icon: 'ðŸ’¼', label: 'Professionals', description: 'Great for meeting notes' },
      ]} />
      <FAQAccordion items={[{ question: '...', answer: '...' }]} />
      <RelatedComparisons slugs={['studybuddy-vs-anki']} />
    </div>
  );
}
```

---

## 5. SEO Checklist for Every New Page

- [x] `metaTitle` < 60 chars, includes primary keyword
- [x] `metaDescription` < 160 chars, includes CTA
- [x] Slug matches target keyword (e.g. `best-ai-writing-tools`)
- [x] 5+ FAQ items (triggers rich snippets)
- [x] Internal links via `relatedComparisons` + `relatedCategories`
- [x] At least one `isOurProduct: true` tool for natural promotion
- [x] `buyingGuide` text for topical authority
- [x] Run `npm run build` to verify generation

---

## Quick Commands

```bash
npm run dev          # Local development at http://localhost:3000
npm run build        # Production build â€” verifies all pages generate
npm run start        # Serve the production build locally
```
