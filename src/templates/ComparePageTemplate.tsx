import Link from 'next/link';
import {
  Breadcrumbs,
  PageHeader,
  VerdictBox,
  ProsCons,
  StarRating,
  FeatureTable,
  RelatedComparisons,
  RelatedCategories,
  AdUnit,
  InArticleAd,
  MultiplexAd,
  AdPlaceholder,
  ComparisonJsonLd,
  BreadcrumbJsonLd,
} from '@/components';
import { isAdSenseEnabled } from '@/lib/adsense';
import { SITE_URL } from '@/lib/metadata';
import type { Comparison } from '@/data/comparisons';

/** Ad slot IDs — replace with your actual AdSense slot IDs */
const AD_SLOTS = {
  compareMid: '3456789012',
  compareBottom: '3456789013',
  compareMultiplex: '3456789014',
};

interface ComparePageTemplateProps {
  comparison: Comparison;
}

/**
 * Reusable template for "X vs Y" comparison pages.
 *
 * Usage (in your page.tsx):
 * ```tsx
 * import ComparePageTemplate from '@/templates/ComparePageTemplate';
 * const comparison = getComparisonBySlug(params.slug);
 * return <ComparePageTemplate comparison={comparison} />;
 * ```
 */
export default function ComparePageTemplate({ comparison }: ComparePageTemplateProps) {
  const { toolA, toolB } = comparison;
  const adsEnabled = isAdSenseEnabled();

  return (
    <>
      {/* Structured data */}
      <ComparisonJsonLd
        title={comparison.metaTitle}
        description={comparison.metaDescription}
        url={`${SITE_URL}/compare/${comparison.slug}`}
        tools={[
          { name: toolA.name, rating: toolA.rating, description: toolA.description },
          { name: toolB.name, rating: toolB.rating, description: toolB.description },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Compare', url: `${SITE_URL}/compare` },
          { name: comparison.title, url: `${SITE_URL}/compare/${comparison.slug}` },
        ]}
      />

      <div className="container-page section-padding">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Compare', href: '/compare' },
            { label: comparison.title },
          ]}
        />

        {/* Page header */}
        <PageHeader
          title={comparison.title}
          subtitle={comparison.intro}
          badge="Head-to-Head Comparison"
          badgeVariant="amber"
        />

        {/* Quick verdict banner */}
        <div className="mt-8">
          <VerdictBox verdict={comparison.verdict} variant="banner" title="Quick Verdict" />
        </div>

        {/* VS cards */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Tool A */}
            <div className={`card ${toolA.isOurProduct ? 'border-primary-200 ring-2 ring-primary-100' : ''}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">{toolA.name}</h2>
                {toolA.isOurProduct && <span className="badge-primary">Our Product</span>}
              </div>
              <p className="mt-2 text-sm text-slate-600">{toolA.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={toolA.rating} size="sm" />
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-500">{toolA.pricing}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                <strong>Best for:</strong> {toolA.bestFor}
              </p>
              <div className="mt-4">
                <ProsCons pros={toolA.pros} cons={toolA.cons} />
              </div>
              <a
                href={toolA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-center"
              >
                Visit {toolA.name} →
              </a>
              <Link
                href={`/tools/${toolA.slug}`}
                className="btn-secondary mt-2 w-full text-center text-sm"
              >
                Read Our {toolA.name} Review
              </Link>
            </div>

            {/* Tool B */}
            <div className={`card ${toolB.isOurProduct ? 'border-primary-200 ring-2 ring-primary-100' : ''}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">{toolB.name}</h2>
                {toolB.isOurProduct && <span className="badge-primary">Our Product</span>}
              </div>
              <p className="mt-2 text-sm text-slate-600">{toolB.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={toolB.rating} size="sm" />
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-500">{toolB.pricing}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                <strong>Best for:</strong> {toolB.bestFor}
              </p>
              <div className="mt-4">
                <ProsCons pros={toolB.pros} cons={toolB.cons} />
              </div>
              <a
                href={toolB.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 w-full text-center"
              >
                Visit {toolB.name} →
              </a>
              <Link
                href={`/tools/${toolB.slug}`}
                className="mt-2 w-full text-center text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline block"
              >
                Read Our {toolB.name} Review
              </Link>
            </div>
          </div>
        </div>

        {/* Ad: Between VS cards and feature table — high decision intent */}
        {adsEnabled ? (
          <InArticleAd slot={AD_SLOTS.compareMid} className="my-10" />
        ) : (
          <AdPlaceholder label="Ad Placement — Comparison Mid-Page" />
        )}

        {/* Feature table */}
        <div className="mt-12">
          <FeatureTable
            columns={[toolA.name, toolB.name]}
            rows={comparison.features.map((row) => ({
              feature: row.feature,
              values: [row.toolA, row.toolB],
            }))}
            highlightColumn={toolA.isOurProduct ? 0 : toolB.isOurProduct ? 1 : undefined}
          />
        </div>

        {/* Full verdict */}
        <div className="mt-12">
          <VerdictBox
            verdict={comparison.verdict}
            detail={comparison.verdictDetail}
            variant="highlight"
          />
        </div>

        {/* Ad: After verdict — reader has made decision */}
        {adsEnabled ? (
          <AdUnit slot={AD_SLOTS.compareBottom} format="horizontal" className="my-10" />
        ) : (
          <AdPlaceholder label="Ad Placement — Comparison Bottom" />
        )}

        {/* Related categories */}
        <div className="mt-12">
          <RelatedCategories
            slugs={comparison.relatedBestPages}
            variant="buttons"
          />
        </div>

        {/* Multiplex ad: Drive to next comparison */}
        {adsEnabled ? (
          <MultiplexAd slot={AD_SLOTS.compareMultiplex} className="my-10" />
        ) : (
          <AdPlaceholder label="Ad Placement — Comparison Multiplex" />
        )}

        {/* Related comparisons */}
        <div className="mt-12">
          <RelatedComparisons
            slugs={comparison.relatedSlugs}
            title="More Comparisons"
          />
        </div>
      </div>
    </>
  );
}
