import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  icon: string;
  description: string;
  slug: string;
  toolCount: number;
}

export default function CategoryCard({ name, icon, description, slug, toolCount }: CategoryCardProps) {
  return (
    <Link
      href={`/best/${slug}`}
      className="card group flex flex-col transition-all hover:border-primary-200 hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <span className="text-xs text-slate-400">{toolCount} tools reviewed</span>
        </div>
      </div>
      <p className="mt-3 flex-grow text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
        Explore tools
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}
