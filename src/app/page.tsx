import Link from 'next/link';
import { categories } from '@/data/categories';
import { comparisons } from '@/data/comparisons';
import { products } from '@/data/products';
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-page section-padding text-center">
          <span className="badge-primary mb-4">Trusted AI Tool Reviews</span>
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Discover the{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Best AI Tools
            </span>{' '}
            for Every Need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            Honest reviews, detailed comparisons, and expert recommendations.
            Find the perfect AI tools for studying, transcription, dictation, and more.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/categories" className="btn-primary text-base">
              Browse Categories →
            </Link>
            <Link href="/blog" className="btn-secondary text-base">
              Read Our Blog
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
              View All Categories →
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Find Your Perfect AI Tool?
          </h2>
          <p className="mt-3 text-lg text-primary-100">
            Browse our categories, read comparisons, and discover the tools that fit your needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Browse All Categories
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
