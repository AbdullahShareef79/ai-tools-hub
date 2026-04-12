import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="text-6xl" aria-hidden="true">🔍</span>
      <h1 className="mt-6 text-4xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-3 text-lg text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/categories" className="btn-secondary">
          Browse Categories
        </Link>
      </div>
    </div>
  );
}
