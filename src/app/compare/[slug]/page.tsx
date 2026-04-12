import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getComparisonBySlug, getAllComparisonSlugs, comparisons } from '@/data/comparisons';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProsCons from '@/components/ProsCons';
import ComparisonCard from '@/components/ComparisonCard';
import { ComparisonJsonLd } from '@/components/JsonLd';
import { AdPlaceholder } from '@/components/AdSense';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) return {};

  return buildMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    path: `/compare/${comparison.slug}`,
  });
}

export default function ComparePage({ params }: PageProps) {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) notFound();

  const { toolA, toolB } = comparison;

  // Find related comparisons
  const relatedComparisons = comparison.relatedSlugs
    .map((slug) => getComparisonBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <ComparisonJsonLd
        title={comparison.metaTitle}
        description={comparison.metaDescription}
        url={`${SITE_URL}/compare/${comparison.slug}`}
        tools={[
          { name: toolA.name, rating: toolA.rating, description: toolA.description },
          { name: toolB.name, rating: toolB.rating, description: toolB.description },
        ]}
      />

      <div className="container-page section-padding">
        <Breadcrumbs
          items={[
            { label: 'Compare', href: '/categories' },
            { label: comparison.title },
          ]}
        />

        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <span className="badge-amber">Head-to-Head Comparison</span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {comparison.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {comparison.intro}
          </p>
        </header>

        {/* Quick verdict banner */}
        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
          <p className="text-sm font-semibold text-primary-700">Quick Verdict</p>
          <p className="mt-1 text-lg font-bold text-slate-900">{comparison.verdict}</p>
        </div>

        {/* VS card */}
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
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${star <= Math.floor(toolA.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">{toolA.rating}/5</span>
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
            </div>

            {/* Tool B */}
            <div className={`card ${toolB.isOurProduct ? 'border-primary-200 ring-2 ring-primary-100' : ''}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">{toolB.name}</h2>
                {toolB.isOurProduct && <span className="badge-primary">Our Product</span>}
              </div>
              <p className="mt-2 text-sm text-slate-600">{toolB.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${star <= Math.floor(toolB.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">{toolB.rating}/5</span>
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
            </div>
          </div>
        </div>

        <AdPlaceholder label="Ad Placement — Comparison Mid-Page" />

        {/* Feature comparison table */}
        <div className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Feature-by-Feature Comparison
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 font-semibold text-primary-700">{toolA.name}</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">{toolB.name}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.features.map((row, index) => (
                  <tr key={index} className={`border-b border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-6 py-3 font-medium text-slate-700">{row.feature}</td>
                    <td className="px-6 py-3 text-slate-600">{row.toolA}</td>
                    <td className="px-6 py-3 text-slate-600">{row.toolB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verdict */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h2 className="text-2xl font-bold text-slate-900">Our Verdict</h2>
            <p className="mt-2 text-lg font-semibold text-primary-700">{comparison.verdict}</p>
            <p className="mt-4 text-slate-600">{comparison.verdictDetail}</p>
          </div>
        </div>

        <AdPlaceholder label="Ad Placement — Comparison Bottom" />

        {/* Related best pages */}
        {comparison.relatedBestPages.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl">
            <h3 className="text-lg font-bold text-slate-900">Related Categories:</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {comparison.relatedBestPages.map((slug) => {
                const cat = getCategoryBySlug(slug);
                return (
                  <Link
                    key={slug}
                    href={`/best/${slug}`}
                    className="btn-secondary text-sm"
                  >
                    {cat?.icon} {cat?.name || slug} →
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Related comparisons */}
        {relatedComparisons.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-slate-900">
              More Comparisons
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedComparisons.map((comp) => (
                comp && (
                  <ComparisonCard
                    key={comp.slug}
                    title={comp.title}
                    slug={comp.slug}
                    toolAName={comp.toolA.name}
                    toolBName={comp.toolB.name}
                    verdict={comp.verdict}
                  />
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
