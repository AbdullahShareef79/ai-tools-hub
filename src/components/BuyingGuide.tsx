interface BuyingGuideProps {
  title?: string;
  /** Supports **bold** markdown syntax */
  content: string;
}

export default function BuyingGuide({
  title = 'How to Choose',
  content,
}: BuyingGuideProps) {
  if (!content) return null;

  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-primary-200 bg-primary-50/50 p-6">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p
        className="mt-2 text-sm text-slate-600"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
        }}
      />
    </div>
  );
}
