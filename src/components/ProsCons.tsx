interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Pros */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
        <h4 className="flex items-center gap-2 text-base font-semibold text-emerald-800">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pros
        </h4>
        <ul className="mt-3 space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-emerald-700">
              <span className="mt-0.5 text-emerald-500">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
        <h4 className="flex items-center gap-2 text-base font-semibold text-red-800">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cons
        </h4>
        <ul className="mt-3 space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-red-700">
              <span className="mt-0.5 text-red-500">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
