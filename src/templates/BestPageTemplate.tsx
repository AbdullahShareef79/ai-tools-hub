import {
  Breadcrumbs,
  PageHeader,
  QuickNav,
  BuyingGuide,
  ToolRankingCard,
  FAQAccordion,
  RelatedComparisons,
  RelatedCategories,
  AdPlaceholder,
  ComparisonJsonLd,
  FAQJsonLd,
} from '@/components';
import { getCategoryBySlug } from '@/data/categories';
import { SITE_URL } from '@/lib/metadata';
import type { BestPage } from '@/data/best-pages';

interface BestPageTemplateProps {
  page: BestPage;
}

/**
 * Reusable template for "Best X Tools" pages.
 *
 * Usage (in your page.tsx):
 * ```tsx
 * import BestPageTemplate from '@/templates/BestPageTemplate';
 * const page = getBestPageBySlug(params.slug);
 * return <BestPageTemplate page={page} />;
 * ```
 */
export default function BestPageTemplate({ page }: BestPageTemplateProps) {
  const category = getCategoryBySlug(page.categorySlug);

  return (
    <>
      {/* Structured data */}
      <ComparisonJsonLd
        title={page.metaTitle}
        description={page.metaDescription}
        url={`${SITE_URL}/best/${page.slug}`}
        tools={page.tools.map((t) => ({
          name: t.name,
          rating: t.rating,
          description: t.description,
        }))}
      />
      <FAQJsonLd questions={page.faq} />

      <div className="container-page section-padding">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category?.name || page.title },
          ]}
        />

        {/* Page header */}
        <PageHeader
          title={page.title}
          subtitle={page.intro}
          badge={category ? `${category.icon} ${category.name}` : undefined}
          yearSuffix="in 2026"
        />

        {/* Quick navigation */}
        <div className="mt-8">
          <QuickNav
            items={page.tools.map((tool) => ({
              slug: tool.slug,
              label: tool.name,
              badge: tool.isOurProduct ? '⭐' : undefined,
              hint: tool.bestFor.split(' ').slice(0, 8).join(' ') + '...',
            }))}
          />
        </div>

        {/* Buying guide */}
        {page.buyingGuide && (
          <div className="mt-10">
            <BuyingGuide content={page.buyingGuide} />
          </div>
        )}

        <AdPlaceholder label="Ad Placement — Best Page Top" />

        {/* Tool rankings */}
        <div className="mx-auto mt-12 max-w-4xl space-y-12">
          {page.tools.map((tool, index) => (
            <div key={tool.slug}>
              <ToolRankingCard tool={tool} rank={index + 1} />
              {/* Ad after 2nd tool */}
              {index === 1 && <AdPlaceholder label="Ad Placement — Best Page Mid" />}
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-16">
          <FAQAccordion items={page.faq} includeJsonLd={false} />
        </div>

        {/* Related comparisons */}
        <div className="mt-16">
          <RelatedComparisons slugs={page.relatedComparisons} />
        </div>

        {/* Related categories */}
        <div className="mt-12">
          <RelatedCategories slugs={page.relatedCategories} />
        </div>
      </div>
    </>
  );
}
