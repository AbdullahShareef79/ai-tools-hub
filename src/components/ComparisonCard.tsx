import Link from 'next/link';

interface ComparisonCardProps {
  title: string;
  slug: string;
  toolAName: string;
  toolBName: string;
  verdict: string;
}

export default function ComparisonCard({
  title,
  slug,
  toolAName,
  toolBName,
  verdict,
}: ComparisonCardProps) {
  return (
    <Link
      href={`/compare/${slug}`}
      className="card group flex flex-col transition-all hover:border-primary-200 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <span className="badge-amber">VS</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex-1 rounded-lg bg-primary-50 p-3 text-center">
          <p className="text-sm font-semibold text-primary-700">{toolAName}</p>
        </div>
        <span className="text-lg font-bold text-slate-300">vs</span>
        <div className="flex-1 rounded-lg bg-slate-100 p-3 text-center">
          <p className="text-sm font-semibold text-slate-700">{toolBName}</p>
        </div>
      </div>

      <p className="mt-4 flex-grow text-sm text-slate-600">{verdict}</p>

      <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
        Read full comparison
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}
