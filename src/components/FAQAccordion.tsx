import { FAQJsonLd } from './JsonLd';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  /** Include FAQPage JSON-LD structured data (default: true) */
  includeJsonLd?: boolean;
}

export default function FAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  includeJsonLd = true,
}: FAQAccordionProps) {
  if (items.length === 0) return null;

  return (
    <>
      {includeJsonLd && <FAQJsonLd questions={items} />}
      <section className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          {title}
        </h2>
        <div className="mt-8 space-y-4">
          {items.map((item, index) => (
            <details key={index} className="card group cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900">
                {item.question}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
