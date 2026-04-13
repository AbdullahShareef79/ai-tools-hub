import type { Metadata } from 'next';
import Link from 'next/link';
import { bestPages } from '@/data/best-pages';
import { categories } from '@/data/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import StarRating from '@/components/StarRating';
import { AdPlaceholder } from '@/components/AdSense';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'All AI Tools — Browse Every Tool We\'ve Reviewed',
  description:
    'Browse every AI tool reviewed by AI Tools Hub. Filter by category, see ratings and pricing at a glance, and find the right tool for studying, transcription, dictation, and more.',
  path: '/tools',
});

/** Flatten all ToolListings from all best-pages into one list */
function getAllTools() {
  const seen = new Set<string>();
  const tools: {
    name: string;
    slug: string;
    url: string;
    description: string;
    rating: number;
    pricing: string;
    isOurProduct: boolean;
    bestFor: string;
    categorySlug: string;
    categoryName: string;
    bestPageSlug: string;
  }[] = [];

  for (const page of bestPages) {
    const cat = categories.find((c) => c.slug === page.categorySlug);
    for (const tool of page.tools) {
      const key = `${tool.name}-${page.categorySlug}`;
      if (!seen.has(key)) {
        seen.add(key);
        tools.push({
          name: tool.name,
          slug: tool.slug,
          url: tool.url,
          description: tool.description,
          rating: tool.rating,
          pricing: tool.pricing,
          isOurProduct: tool.isOurProduct,
          bestFor: tool.bestFor,
          categorySlug: page.categorySlug,
          categoryName: cat?.name ?? page.title,
          bestPageSlug: page.slug,
        });
      }
    }
  }

  return tools.sort((a, b) => b.rating - a.rating);
}

const allTools = getAllTools();

const CATEGORY_LABELS: Record<string, string> = {
  'ai-study-tools': '📚 AI Study Tools',
  'voice-to-text-apps': '🗣️ Voice-to-Text',
  'dictation-software': '🎙️ Dictation',
  'muslim-apps': '🌙 Muslim Apps',
  'ai-note-taking-tools': '📝 Note-Taking',
  'ai-tools-for-college-students': '🎓 College Students',
  'dictation-software-for-windows': '💻 Windows Dictation',
  'ai-writing-tools': '✍️ AI Writing Tools',
  'ai-productivity-tools': '⚡ AI Productivity Tools',
};

export default function ToolsPage() {
  const categoryGroups = bestPages.map((page) => ({
    slug: page.categorySlug,
    label: CATEGORY_LABELS[page.categorySlug] ?? page.title,
    bestPageSlug: page.slug,
    tools: allTools.filter((t) => t.categorySlug === page.categorySlug),
  }));

  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'All Tools' }]} />

      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">All Reviewed AI Tools</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Every tool we&apos;ve tested — ranked by rating, with pricing and category at a glance.
          Click any tool to read the full review.
        </p>
        {/* Category jump links */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          {categoryGroups.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-700 transition-colors hover:border-primary-400 hover:text-primary-700"
            >
              {g.label}
            </a>
          ))}
        </div>
      </div>

      <AdPlaceholder label="Ad Placement — Tools Index Top" />

      {/* Category sections */}
      <div className="mt-12 space-y-16">
        {categoryGroups.map((group) => (
          <section key={group.slug} id={group.slug}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-900">{group.label}</h2>
              <Link
                href={`/best/${group.bestPageSlug}`}
                className="shrink-0 text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Full ranking →
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.tools.map((tool) => (
                <div
                  key={`${tool.slug}-${group.slug}`}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-900">{tool.name}</h3>
                        {tool.isOurProduct && (
                          <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700">
                            Our Product
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <StarRating rating={tool.rating} size="sm" />
                        <span className="text-xs text-slate-500">{tool.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                      {tool.pricing.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Best for */}
                  <p className="mt-3 text-xs text-slate-500 line-clamp-2">
                    <span className="font-medium text-slate-700">Best for:</span> {tool.bestFor}
                  </p>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={`/best/${group.bestPageSlug}#${tool.slug}`}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Read review →
                    </Link>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-sm font-medium text-slate-500 hover:text-slate-700"
                    >
                      Visit site ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdPlaceholder label="Ad Placement — Tools Index Bottom" />

      {/* CTA */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 text-center ring-1 ring-primary-100">
        <h2 className="text-2xl font-bold text-slate-900">Not sure which tool is right for you?</h2>
        <p className="mt-2 text-slate-600">
          Read our detailed category guides with pros, cons, and side-by-side comparisons.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/best/ai-study-tools" className="btn-primary">
            Best AI Study Tools →
          </Link>
          <Link href="/best/voice-to-text-apps" className="btn-secondary">
            Best Voice-to-Text Apps →
          </Link>
          <Link href="/categories" className="btn-secondary">
            All Categories →
          </Link>
        </div>
      </div>
    </div>
  );
}
