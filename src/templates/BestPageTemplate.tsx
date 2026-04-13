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
  AggregateRatingJsonLd,
} from '@/components';
import { getCategoryBySlug } from '@/data/categories';
import { blogPosts } from '@/data/blog-posts';
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

  // Blog posts topically linked to this best-page
  const relatedBlogPosts = blogPosts
    .filter((p) => p.relatedBestPages.includes(page.slug))
    .slice(0, 3);

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
      <AggregateRatingJsonLd
        tools={page.tools.map((t) => ({
          name: t.name,
          url: t.url,
          rating: t.rating,
          description: t.description,
        }))}
      />

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

        {/* Last updated + share */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            🔄 Last updated:{' '}
            <time dateTime="2026-04-13">April 13, 2026</time>
          </p>
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(page.metaTitle)}&url=${encodeURIComponent(`${SITE_URL}/best/${page.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              𝕏 Share
            </a>
          </div>
        </div>

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

        {/* From the Blog — topical articles */}
        {relatedBlogPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-slate-900">From the Blog</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">
                    Article
                  </p>
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
                    Read article →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
