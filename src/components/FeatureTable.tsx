export interface FeatureRow {
  feature: string;
  values: string[];
}

interface FeatureTableProps {
  title?: string;
  columns: string[];
  rows: FeatureRow[];
  /** Highlight index (0-based) for "our product" column styling */
  highlightColumn?: number;
}

export default function FeatureTable({
  title = 'Feature-by-Feature Comparison',
  columns,
  rows,
  highlightColumn,
}: FeatureTableProps) {
  if (rows.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="text-center text-3xl font-bold text-slate-900">{title}</h2>
      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 font-semibold text-slate-700">Feature</th>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`px-6 py-4 font-semibold ${
                    highlightColumn === i ? 'text-primary-700' : 'text-slate-700'
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-slate-100 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                }`}
              >
                <td className="px-6 py-3 font-medium text-slate-700">{row.feature}</td>
                {row.values.map((value, i) => (
                  <td
                    key={i}
                    className={`px-6 py-3 ${
                      highlightColumn === i ? 'text-primary-700 font-medium' : 'text-slate-600'
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
