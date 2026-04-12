interface VerdictBoxProps {
  title?: string;
  verdict: string;
  detail?: string;
  /** Visual style variant */
  variant?: 'highlight' | 'banner';
}

export default function VerdictBox({
  title = 'Our Verdict',
  verdict,
  detail,
  variant = 'highlight',
}: VerdictBoxProps) {
  if (variant === 'banner') {
    return (
      <div className="mx-auto max-w-4xl rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
        <p className="text-sm font-semibold text-primary-700">{title}</p>
        <p className="mt-1 text-lg font-bold text-slate-900">{verdict}</p>
        {detail && <p className="mt-2 text-sm text-slate-600">{detail}</p>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-lg font-semibold text-primary-700">{verdict}</p>
      {detail && <p className="mt-4 text-slate-600">{detail}</p>}
    </div>
  );
}
