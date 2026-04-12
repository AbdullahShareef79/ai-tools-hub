import Link from 'next/link';

export interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
  columns?: 1 | 2 | 3;
}

export default function RelatedArticles({
  articles,
  title = 'More Articles',
  columns = 2,
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  const gridClasses = {
    1: '',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className={`mt-6 grid gap-6 ${gridClasses[columns]}`}>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="card group transition-all hover:border-primary-200"
          >
            <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 line-clamp-2">
              {article.excerpt}
            </p>
            <span className="mt-3 inline-flex text-sm font-medium text-primary-600">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
