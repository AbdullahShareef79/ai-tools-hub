import Link from 'next/link';
import { categories } from '@/data/categories';
import { comparisons } from '@/data/comparisons';
import { products } from '@/data/products';
import { blogPosts } from '@/data/blog-posts';
import CategoryCard from '@/components/CategoryCard';
import ComparisonCard from '@/components/ComparisonCard';
import ToolCard from '@/components/ToolCard';
import { WebSiteJsonLd } from '@/components/JsonLd';
import { AdPlaceholder } from '@/components/AdSense';

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50" aria-label="Hero">
        <div className="container-page section-padding text-center">
          <span className="badge-primary mb-4">Trusted AI Tool Reviews — Updated 2026</span>
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Find the{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Best AI Tools
            </span>{' '}
            — Reviewed &amp; Compared
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            Honest, hands-on reviews of AI study tools, voice-to-text apps, dictation software, and more.
            We test everything so you don&apos;t have to.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/best/ai-study-tools" className="btn-primary text-base">
              See Best AI Study Tools →
            </Link>
            <Link href="/categories" className="btn-secondary text-base">
              Browse All Categories
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Independently tested
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Honest pros &amp; cons
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated for 2026
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No fake reviews
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 text-center">
            <div>
              <p className="text-3xl font-extrabold text-primary-600">50+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Tools Reviewed</p>
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <div>
              <p className="text-3xl font-extrabold text-primary-600">7</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Categories</p>
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <div>
              <p className="text-3xl font-extrabold text-primary-600">2026</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Fully Updated</p>
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <div>
              <p className="text-3xl font-extrabold text-primary-600">100%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Independent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-jump links */}
      <section className="border-b border-slate-200 bg-white py-4">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-medium text-slate-500">Jump to:</span>
            <Link href="/best/ai-study-tools" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">📚 Best AI Study Tools</Link>
            <Link href="/best/voice-to-text-apps" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">🗣️ Voice-to-Text Apps</Link>
            <Link href="/best/dictation-software" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">🎙️ Dictation Software</Link>
            <Link href="/best/muslim-apps" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">🌙 Muslim Apps</Link>
            <Link href="/best/ai-note-taking-tools" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">📝 AI Note-Taking</Link>
            <Link href="/best/ai-tools-for-college-students" className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 hover:border-primary-400 hover:text-primary-700 transition-colors">🎓 AI for Students</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Explore our in-depth reviews across the most popular AI tool categories.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                icon={category.icon}
                description={category.description}
                slug={category.slug}
                toolCount={category.toolCount}
              />
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder label="Ad Placement — Homepage Mid-Page" />

      {/* Comparisons Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Head-to-Head Comparisons
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              See how the top tools stack up against each other with our honest, feature-by-feature comparisons.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
          <div className="mt-8 text-center">
            <Link href="/categories" className="btn-secondary">
              See All Categories &amp; Comparisons →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Featured Tools
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Handpicked tools we&apos;ve tested and recommend.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ToolCard
                key={product.id}
                name={product.name}
                icon={product.icon}
                tagline={product.tagline}
                description={product.description}
                url={product.url}
                isOurProduct
                categoryHref={`/best/${product.categorySlug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Review Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              How We Review Tools
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              We believe in honest, transparent reviews. Here&apos;s our process.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
                🔍
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">We Test Everything</h3>
              <p className="mt-2 text-sm text-slate-600">
                Every tool is tested hands-on by our team. We don&apos;t just read feature lists — we use the actual products.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
                ⚖️
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Honest Pros &amp; Cons</h3>
              <p className="mt-2 text-sm text-slate-600">
                No tool is perfect. We highlight genuine strengths and real weaknesses so you can make an informed choice.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
                🔄
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Regularly Updated</h3>
              <p className="mt-2 text-sm text-slate-600">
                AI tools evolve fast. We revisit our reviews regularly to make sure our recommendations stay accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">From the Blog</h2>
              <p className="mt-2 text-lg text-slate-600">Guides, tips, and deep-dives on AI tools.</p>
            </div>
            <Link href="/blog" className="btn-secondary shrink-0">View All Posts →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">{tag}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{post.readingTime}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-3 text-lg text-slate-600">Answers to common questions about AI tools.</p>
            </div>
            <dl className="mt-10 space-y-4">
              {[
                {
                  q: 'Are AI tools free to use?',
                  a: 'Many AI tools offer a free tier with limited features. Premium plans typically unlock higher usage limits, advanced features, and priority support. Our reviews always cover pricing in detail so you know what to expect.',
                },
                {
                  q: 'How do I choose the right AI tool for my needs?',
                  a: 'Start by identifying your main use case — studying, transcription, dictation, note-taking, etc. Then read our category guides and head-to-head comparisons. We make specific recommendations based on different budgets and workflows.',
                },
                {
                  q: 'Are AI transcription and dictation tools accurate?',
                  a: 'The best modern tools achieve 95%+ accuracy in ideal conditions. Accuracy depends on audio quality, accent, and background noise. Our reviews include real-world accuracy tests so you get honest benchmarks.',
                },
                {
                  q: 'How often are your reviews updated?',
                  a: 'We revisit reviews whenever a tool releases a major update, changes pricing, or new competitors emerge. Every page displays its last-updated date so you always know how fresh the information is.',
                },
                {
                  q: 'Do you accept payment to promote tools?',
                  a: 'No. Our rankings are based entirely on our own testing and research. Some links are affiliate links, which means we may earn a commission if you purchase — but this never influences our scores or recommendations.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <dt className="font-bold text-slate-900">{q}</dt>
                  <dd className="mt-2 text-sm text-slate-600 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 px-8 py-12 text-center ring-1 ring-primary-100">
            <span className="text-3xl">📬</span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
              Get Weekly AI Tool Picks
            </h2>
            <p className="mt-3 text-slate-600">
              New reviews, comparisons, and recommendations — straight to your inbox. No spam, ever.
            </p>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:flex-1"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">Unsubscribe anytime. We respect your privacy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Pick Your Perfect AI Tool?
          </h2>
          <p className="mt-3 text-lg text-primary-100">
            Browse our expert reviews, compare top tools side-by-side, and find exactly what fits your workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/best/ai-study-tools"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              See Best AI Study Tools
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-lg border border-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
