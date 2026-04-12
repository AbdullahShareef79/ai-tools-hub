export interface AudienceItem {
  icon: string;
  label: string;
  description: string;
}

interface WhoIsThisForProps {
  title?: string;
  audiences: AudienceItem[];
}

export default function WhoIsThisFor({
  title = 'Who Is This For?',
  audiences,
}: WhoIsThisForProps) {
  if (audiences.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-primary-200"
          >
            <span className="text-2xl" aria-hidden="true">{audience.icon}</span>
            <h3 className="mt-2 text-base font-semibold text-slate-900">{audience.label}</h3>
            <p className="mt-1 text-sm text-slate-600">{audience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
