import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AdUnit, MultiplexAd, AdPlaceholder, isAdSenseEnabled } from '@/components/AdSense';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'AI Tools Blog — Reviews, Guides & Comparisons for 2026',
  description:
    'Expert guides, honest reviews, and practical tips on AI study tools, voice-to-text apps, dictation software, and more. Updated for 2026.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">AI Tools Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Practical guides, honest reviews, and expert comparisons on AI study tools, voice-to-text apps, dictation software, and productivity tools — updated for 2026.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <Link href="/best/ai-study-tools" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">AI Study Tools</Link>
          <Link href="/best/voice-to-text-apps" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">Voice-to-Text</Link>
          <Link href="/best/dictation-software" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">Dictation Software</Link>
          <Link href="/best/muslim-apps" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">Muslim Apps</Link>
          <Link href="/best/ai-writing-tools" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">AI Writing</Link>
          <Link href="/best/ai-productivity-tools" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">AI Productivity</Link>
          <Link href="/categories" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600 hover:border-primary-300 hover:text-primary-700 transition-colors">All Categories →</Link>
        </div>
      </header>

      {isAdSenseEnabled() ? (
        <AdUnit slot="5678901234" format="horizontal" className="my-8" />
      ) : (
        <AdPlaceholder label="Ad Placement — Blog Index Top" />
      )}

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card group flex flex-col transition-all hover:border-primary-200 hover:shadow-lg"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="badge bg-primary-50 text-primary-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-2 flex-grow text-sm text-slate-600">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Read more */}
            <div className="mt-3 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
              Read article
              <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {isAdSenseEnabled() ? (
        <MultiplexAd slot="5678901235" className="my-8" />
      ) : (
        <AdPlaceholder label="Ad Placement — Blog Index Bottom" />
      )}

      {/* CTA for more content */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-900">Looking for Tool Reviews?</h2>
        <p className="mt-2 text-slate-600">
          Check out our detailed category pages and head-to-head comparisons.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/categories" className="btn-primary">
            Browse All Categories →
          </Link>
          <Link href="/best/ai-study-tools" className="btn-secondary">
            See Best AI Study Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
