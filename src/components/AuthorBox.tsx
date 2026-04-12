interface AuthorBoxProps {
  name: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  tags?: string[];
}

export default function AuthorBox({
  name,
  publishedAt,
  updatedAt,
  readingTime,
  tags,
}: AuthorBoxProps) {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div>
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge bg-primary-50 text-primary-700">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Meta line */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
        <span>By {name}</span>
        <span>•</span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime}</span>
          </>
        )}
        {updatedAt && updatedAt !== publishedAt && (
          <>
            <span>•</span>
            <span>Updated {formatDate(updatedAt)}</span>
          </>
        )}
      </div>
    </div>
  );
}
