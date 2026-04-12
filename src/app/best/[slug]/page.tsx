import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBestPageBySlug, getAllBestPageSlugs } from '@/data/best-pages';
import { getComparisonBySlug } from '@/data/comparisons';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProsCons from '@/components/ProsCons';
import ComparisonCard from '@/components/ComparisonCard';
import { FAQJsonLd, ComparisonJsonLd } from '@/components/JsonLd';
import { AdPlaceholder } from '@/components/AdSense';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBestPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getBestPageBySlug(params.slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/best/${page.slug}`,
  });
}

export default function BestPage({ params }: PageProps) {
  const page = getBestPageBySlug(params.slug);
  if (!page) notFound();

  const category = getCategoryBySlug(page.categorySlug);

  return (
    <>
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
        <Breadcrumbs
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category?.name || page.title },
          ]}
        />

        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <span className="badge-primary">{category?.icon} {category?.name}</span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {page.title} in 2026
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {page.intro}
          </p>
        </header>

        {/* Quick navigation */}
        <nav className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-700">Quick Navigation:</p>
          <ol className="mt-2 space-y-1">
            {page.tools.map((tool, index) => (
              <li key={tool.slug}>
                <a href={`#${tool.slug}`} className="text-sm text-primary-600 hover:text-primary-700">
                  {index + 1}. {tool.name} {tool.isOurProduct && '⭐'} — {tool.bestFor.split(' ').slice(0, 8).join(' ')}...
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Buying guide */}
        {page.buyingGuide && (
          <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-primary-200 bg-primary-50/50 p-6">
            <h2 className="text-xl font-bold text-slate-900">How to Choose</h2>
            <p className="mt-2 text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: page.buyingGuide.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        )}

        <AdPlaceholder label="Ad Placement — Best Page Top" />

        {/* Tool listings */}
        <div className="mx-auto mt-12 max-w-4xl space-y-12">
          {page.tools.map((tool, index) => (
            <article key={tool.slug} id={tool.slug} className="scroll-mt-24">
              <div className="card">
                {/* Tool header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900">{tool.name}</h2>
                      {tool.isOurProduct && <span className="badge-primary">Our Product</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex text-amber-400" aria-label={`Rating: ${tool.rating} out of 5`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-5 w-5 ${star <= Math.floor(tool.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-slate-700">{tool.rating}/5</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-slate-600">{tool.description}</p>

                {/* Pricing & Best For */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="badge bg-slate-100 text-slate-700">💰 {tool.pricing}</span>
                  <span className="badge bg-slate-100 text-slate-700">🎯 {tool.bestFor}</span>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-700">Key Features:</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span key={feature} className="badge bg-primary-50 text-primary-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="mt-6">
                  <ProsCons pros={tool.pros} cons={tool.cons} />
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit {tool.name} →
                  </a>
                </div>
              </div>

              {/* Ad placement after 2nd tool */}
              {index === 1 && <AdPlaceholder label="Ad Placement — Best Page Mid" />}
            </article>
          ))}
        </div>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {page.faq.map((item, index) => (
                <details key={index} className="card group cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900">
                    {item.question}
                    <svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related comparisons */}
        {page.relatedComparisons.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-slate-900">
              Related Comparisons
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {page.relatedComparisons.map((slug) => {
                const comparison = getComparisonBySlug(slug);
                if (!comparison) return null;
                return (
                  <ComparisonCard
                    key={slug}
                    title={comparison.title}
                    slug={comparison.slug}
                    toolAName={comparison.toolA.name}
                    toolBName={comparison.toolB.name}
                    verdict={comparison.verdict}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Related categories */}
        {page.relatedCategories.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-sm text-slate-500">
              Also explore:{' '}
              {page.relatedCategories.map((slug, index) => {
                const cat = getCategoryBySlug(slug);
                return (
                  <span key={slug}>
                    {index > 0 && ', '}
                    <Link href={`/best/${slug}`} className="text-primary-600 hover:text-primary-700">
                      {cat?.name || slug}
                    </Link>
                  </span>
                );
              })}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
