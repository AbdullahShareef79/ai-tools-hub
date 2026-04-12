import Link from 'next/link';
import { getCategoryBySlug } from '@/data/categories';

interface RelatedCategoriesProps {
  slugs: string[];
  label?: string;
  /** Show as buttons or inline links */
  variant?: 'buttons' | 'inline';
}

export default function RelatedCategories({
  slugs,
  label = 'Also explore:',
  variant = 'inline',
}: RelatedCategoriesProps) {
  if (slugs.length === 0) return null;

  if (variant === 'buttons') {
    return (
      <section className="mx-auto max-w-4xl">
        <h3 className="text-lg font-bold text-slate-900">Related Categories:</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {slugs.map((slug) => {
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
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm text-slate-500">
        {label}{' '}
        {slugs.map((slug, index) => {
          const cat = getCategoryBySlug(slug);
          return (
            <span key={slug}>
              {index > 0 && ', '}
              <Link
                href={`/best/${slug}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {cat?.name || slug}
              </Link>
            </span>
          );
        })}
      </p>
    </div>
  );
}
