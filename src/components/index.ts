/**
 * Barrel export for all reusable components.
 * Import from '@/components' instead of individual files.
 */

// ─── Layout & Navigation ────────────────────────────────────────
export { default as Breadcrumbs } from './Breadcrumbs';
export { default as PageHeader } from './PageHeader';
export { default as QuickNav } from './QuickNav';
export { default as SectionDivider } from './SectionDivider';

// ─── Content Blocks ─────────────────────────────────────────────
export { default as ProsCons } from './ProsCons';
export { default as StarRating } from './StarRating';
export { default as VerdictBox } from './VerdictBox';
export { default as BuyingGuide } from './BuyingGuide';
export { default as FAQAccordion } from './FAQAccordion';
export { default as AuthorBox } from './AuthorBox';
export { default as WhoIsThisFor } from './WhoIsThisFor';
export { default as FeatureTable } from './FeatureTable';

// ─── Cards ──────────────────────────────────────────────────────
export { default as ToolCard } from './ToolCard';
export { default as ToolRankingCard } from './ToolRankingCard';
export { default as ComparisonCard } from './ComparisonCard';
export { default as CategoryCard } from './CategoryCard';
export { default as CTAButton } from './CTAButton';

// ─── Related / Cross-linking ────────────────────────────────────
export { default as RelatedComparisons } from './RelatedComparisons';
export { default as RelatedCategories } from './RelatedCategories';
export { default as RelatedArticles } from './RelatedArticles';

// ─── AdSense ────────────────────────────────────────────────────
export { AdSenseScript, AdUnit, InArticleAd, MultiplexAd, AdPlaceholder } from './AdSense';

// ─── JSON-LD Structured Data ────────────────────────────────────
export {
  WebSiteJsonLd,
  ArticleJsonLd,
  FAQJsonLd,
  BreadcrumbJsonLd,
  ComparisonJsonLd,
  AggregateRatingJsonLd,
} from './JsonLd';

// ─── Type re-exports for data contracts ─────────────────────────
export type { FAQItem } from './FAQAccordion';
export type { AudienceItem } from './WhoIsThisFor';
export type { FeatureRow } from './FeatureTable';
export type { RankedTool } from './ToolRankingCard';
export type { RelatedArticle } from './RelatedArticles';
