import { getComparisonBySlug } from '@/data/comparisons';
import ComparisonCard from './ComparisonCard';

interface RelatedComparisonsProps {
  slugs: string[];
  title?: string;
  columns?: 1 | 2;
}

export default function RelatedComparisons({
  slugs,
  title = 'Related Comparisons',
  columns = 2,
}: RelatedComparisonsProps) {
  const comparisons = slugs
    .map((slug) => getComparisonBySlug(slug))
    .filter(Boolean);

  if (comparisons.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className={`mt-8 grid gap-6 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
        {comparisons.map((comp) =>
          comp ? (
            <ComparisonCard
              key={comp.slug}
              title={comp.title}
              slug={comp.slug}
              toolAName={comp.toolA.name}
              toolBName={comp.toolB.name}
              verdict={comp.verdict}
            />
          ) : null,
        )}
      </div>
    </section>
  );
}
