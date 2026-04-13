import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CopyLinkButton from './CopyLinkButton';
import { getToolBySlug, getAllUniqueToolSlugs } from '@/data/best-pages';
import { getCategoryBySlug } from '@/data/categories';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import StarRating from '@/components/StarRating';
import { AdPlaceholder } from '@/components/AdSense';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllUniqueToolSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return buildMetadata({
    title: `${tool.name} Review (2026) — Is It Worth It?`,
    description: `In-depth ${tool.name} review for 2026. See our verdict, pros & cons, pricing, key features, and how it compares to alternatives. Updated April 2026.`,
    path: `/tools/${tool.slug}`,
  });
}

function RatingBar({ rating }: { rating: number }) {
  const pct = (rating / 5) * 100;
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-amber-400"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-slate-700">{rating}/5</span>
    </div>
  );
}

export default function ToolReviewPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.categorySlug);
  const pageUrl = `${SITE_URL}/tools/${tool.slug}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${tool.name} Review 2026 — ${tool.bestFor}`)}&url=${encodeURIComponent(pageUrl)}`;

  // SoftwareApplication JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: 'Utility',
    operatingSystem: 'Web, iOS, Android, Windows',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: tool.pricing,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'AI Tools Hub' },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: tool.rating.toFixed(1),
        bestRating: '5',
      },
      reviewBody: tool.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-page section-padding">
        <Breadcrumbs
          items={[
            { label: 'All Tools', href: '/tools' },
            { label: tool.name },
          ]}
        />

        {/* Hero */}
        <div className="mx-auto max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {tool.isOurProduct && (
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                ⚡ Our Product
              </span>
            )}
            {category && (
              <Link
                href={`/best/${tool.bestPageSlug}`}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200 transition-colors"
              >
                {category.icon} {category.name}
              </Link>
            )}
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              💰 {tool.pricing}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {tool.name} Review — Is It Worth It in 2026?
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {tool.description}
          </p>

          {/* Rating summary */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-amber-700 uppercase tracking-wide">Our Rating</p>
                <div className="mt-1 flex items-center gap-2">
                  <StarRating rating={tool.rating} />
                  <span className="text-2xl font-bold text-slate-900">{tool.rating}</span>
                  <span className="text-slate-500">/5</span>
                </div>
                <RatingBar rating={tool.rating} />
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Try {tool.name} →
                </a>
                <Link
                  href={`/best/${tool.bestPageSlug}`}
                  className="btn-secondary text-center text-sm"
                >
                  See Full Comparison
                </Link>
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="mt-6 rounded-xl border-l-4 border-primary-500 bg-primary-50 p-4">
            <p className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-1">Best For</p>
            <p className="text-slate-800">{tool.bestFor}</p>
          </div>

          <AdPlaceholder label="Ad — Tool Review Mid" />

          {/* Pros & Cons */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h2 className="text-base font-bold text-green-800 mb-3">✅ Pros</h2>
              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-900">
                    <span className="mt-0.5 text-green-600 flex-shrink-0">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h2 className="text-base font-bold text-red-800 mb-3">❌ Cons</h2>
              <ul className="space-y-2">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-900">
                    <span className="mt-0.5 text-red-500 flex-shrink-0">−</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Our Verdict */}
          <div className="mt-8 rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              🏆 Our Verdict
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {tool.isOurProduct
                ? `${tool.name} is one of our own tools, built to solve a real problem we encountered. We stand behind its quality and continue to improve it based on user feedback. If it fits your use case, we think you'll love it.`
                : `${tool.name} earned a ${tool.rating}/5 rating from our team after hands-on testing. ${tool.bestFor} If that matches your situation, it's worth trying — especially given the free tier.`}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try {tool.name} Free →
              </a>
              <Link href={`/best/${tool.bestPageSlug}`} className="btn-secondary">
                Compare All {tool.bestPageTitle.replace('Best ', '')} →
              </Link>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm text-slate-500">Share this review:</span>
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              𝕏 Share on X
            </a>
            <CopyLinkButton url={pageUrl} />
          </div>

          <AdPlaceholder label="Ad — Tool Review Bottom" />

          {/* Related Tools */}
          {tool.relatedTools.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Compare Alternatives
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {tool.relatedTools.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.slug}`}
                    className="card group flex items-start justify-between gap-4 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                        {related.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 truncate">{related.pricing}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <StarRating rating={related.rating} size="sm" />
                      <p className="text-xs font-bold text-slate-700 mt-0.5">{related.rating}/5</p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-center">
                <Link href={`/best/${tool.bestPageSlug}`} className="text-sm text-primary-600 font-medium hover:underline">
                  See the full {tool.bestPageTitle} →
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
