interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /** Badge text shown above the title (e.g. "📚 AI Study Tools") */
  badge?: string;
  /** Badge color variant */
  badgeVariant?: 'primary' | 'amber' | 'emerald';
  /** Year suffix appended to the title (e.g. "in 2026") */
  yearSuffix?: string;
}

const badgeClasses = {
  primary: 'badge-primary',
  amber: 'badge-amber',
  emerald: 'badge bg-emerald-50 text-emerald-700',
};

export default function PageHeader({
  title,
  subtitle,
  badge,
  badgeVariant = 'primary',
  yearSuffix,
}: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl text-center">
      {badge && <span className={badgeClasses[badgeVariant]}>{badge}</span>}
      <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
        {yearSuffix && ` ${yearSuffix}`}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      )}
    </header>
  );
}
