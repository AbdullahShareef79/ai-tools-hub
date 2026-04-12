import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { comparisons } from '@/data/comparisons';
import CategoryCard from '@/components/CategoryCard';
import ComparisonCard from '@/components/ComparisonCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'All Categories',
  description:
    'Browse all AI tool categories. Find the best AI study tools, voice-to-text apps, dictation software, Muslim apps, and more with honest reviews and comparisons.',
  path: '/categories',
});

export default function CategoriesPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Categories' }]} />

      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          All Categories
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Explore our curated categories of the best AI and productivity tools.
          Each category includes in-depth reviews, honest pros and cons, and our expert recommendations.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Comparisons Section */}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Popular Comparisons
        </h2>
        <p className="mt-3 text-center text-lg text-slate-600">
          Head-to-head comparisons of the most popular tools.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
      </div>
    </div>
  );
}
