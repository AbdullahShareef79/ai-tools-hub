import Link from 'next/link';

interface ToolCardProps {
  name: string;
  icon: string;
  tagline: string;
  description: string;
  url: string;
  isOurProduct?: boolean;
  rating?: number;
  pricing?: string;
  bestFor?: string;
  categoryHref?: string;
}

export default function ToolCard({
  name,
  icon,
  tagline,
  description,
  url,
  isOurProduct,
  rating,
  pricing,
  bestFor,
  categoryHref,
}: ToolCardProps) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">{icon}</span>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-500">{tagline}</p>
          </div>
        </div>
        {isOurProduct && (
          <span className="badge-primary">Our Product</span>
        )}
      </div>

      <p className="mt-3 flex-grow text-sm text-slate-600">{description}</p>

      {(rating || pricing || bestFor) && (
        <div className="mt-4 space-y-2">
          {rating && (
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400" aria-label={`Rating: ${rating} out of 5`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-4 w-4 ${star <= Math.floor(rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700">{rating}/5</span>
            </div>
          )}
          {pricing && (
            <p className="text-sm text-slate-500">
              <span className="font-medium">Pricing:</span> {pricing}
            </p>
          )}
          {bestFor && (
            <p className="text-sm text-slate-500">
              <span className="font-medium">Best for:</span> {bestFor}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3 pt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center text-sm"
        >
          Visit {name} →
        </a>
        {categoryHref && (
          <Link href={categoryHref} className="btn-secondary flex-1 text-center text-sm">
            See Category
          </Link>
        )}
      </div>
    </div>
  );
}
