interface QuickNavItem {
  slug: string;
  label: string;
  /** Optional badge text (e.g. "⭐") */
  badge?: string;
  /** Optional short description (e.g. bestFor) */
  hint?: string;
}

interface QuickNavProps {
  title?: string;
  items: QuickNavItem[];
}

export default function QuickNav({
  title = 'Quick Navigation:',
  items,
}: QuickNavProps) {
  if (items.length === 0) return null;

  return (
    <nav className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      <ol className="mt-2 space-y-1">
        {items.map((item, index) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              {index + 1}. {item.label}
              {item.badge && ` ${item.badge}`}
              {item.hint && ` — ${item.hint}`}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
