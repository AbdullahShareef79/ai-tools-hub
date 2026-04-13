import Link from 'next/link';
import ProsCons from './ProsCons';
import StarRating from './StarRating';

export interface RankedTool {
  name: string;
  slug: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  url: string;
  isOurProduct: boolean;
  rating: number;
  pricing: string;
  features: string[];
}

interface ToolRankingCardProps {
  tool: RankedTool;
  rank: number;
}

export default function ToolRankingCard({ tool, rank }: ToolRankingCardProps) {
  return (
    <article id={tool.slug} className="scroll-mt-24">
      <div className="card">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
              {rank}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">{tool.name}</h2>
            {tool.isOurProduct && <span className="badge-primary">Our Product</span>}
          </div>
          <StarRating rating={tool.rating} size="md" />
        </div>

        {/* Description */}
        <p className="mt-4 text-slate-600">{tool.description}</p>

        {/* Meta badges */}
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="badge bg-slate-100 text-slate-700">💰 {tool.pricing}</span>
          <span className="badge bg-slate-100 text-slate-700">🎯 {tool.bestFor}</span>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-700">Key Features:</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tool.features.map((feature) => (
              <span key={feature} className="badge bg-primary-50 text-primary-700">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="mt-6">
          <ProsCons pros={tool.pros} cons={tool.cons} />
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit {tool.name} →
          </a>
          <Link
            href={`/tools/${tool.slug}`}
            className="btn-secondary text-sm"
          >
            Read Full Review
          </Link>
        </div>
      </div>
    </article>
  );
}
