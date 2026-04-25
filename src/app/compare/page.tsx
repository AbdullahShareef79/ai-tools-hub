import type { Metadata } from 'next';
import Link from 'next/link';
import { comparisons } from '@/data/comparisons';
import ComparisonCard from '@/components/ComparisonCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AdUnit, MultiplexAd, AdPlaceholder } from '@/components/AdSense';
import { isAdSenseEnabled } from '@/lib/adsense';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'AI Tool Comparisons — Head-to-Head Reviews',
  description:
    'Compare the best AI tools side by side. Honest head-to-head comparisons of study apps, voice-to-text tools, dictation software, and more. Find the right tool for you in 2026.',
  path: '/compare',
  keywords: [
    'AI tool comparison',
    'compare AI tools',
    'best AI tools comparison',
    'AI study tools vs',
    'voice to text comparison',
    'dictation software comparison 2026',
  ],
});

export default function CompareIndexPage() {
  const adsEnabled = isAdSenseEnabled();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Compare', url: `${SITE_URL}/compare` },
        ]}
      />

      <div className="container-page section-padding">
        <Breadcrumbs items={[{ label: 'Compare' }]} />

        <header className="text-center">
          <span className="badge bg-amber-50 text-amber-700">⚖️ Head-to-Head</span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            AI Tool Comparisons
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Can&apos;t decide between two tools? Our honest, feature-by-feature comparisons help
            you pick the right one. Every comparison is based on hands-on testing.
          </p>
        </header>

        {/* Ad: Top of comparisons index */}
        {adsEnabled ? (
          <AdUnit slot="7890123456" format="horizontal" className="my-8" />
        ) : (
          <AdPlaceholder label="Ad Placement — Compare Index Top" />
        )}

        {/* Comparisons Grid */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {comparisons.map((comparison) => (
            <ComparisonCard
              key={comparison.slug}
              title={comparison.title}
              slug={comparison.slug}
              toolAName={comparison.toolA.name}
              toolBName={comparison.toolB.name}
              verdict={comparison.verdict}
            />
          ))}
        </div>

        {/* Multiplex Ad: Bottom */}
        {adsEnabled ? (
          <MultiplexAd slot="7890123457" className="my-10" />
        ) : (
          <AdPlaceholder label="Ad Placement — Compare Index Bottom (Multiplex)" />
        )}

        {/* CTA for more content */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900">Want Full Category Reviews?</h2>
          <p className="mt-2 text-slate-600">
            Check out our &quot;Best Of&quot; pages for complete rankings with detailed pros, cons, and pricing.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/categories" className="btn-primary">
              Browse Categories →
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
