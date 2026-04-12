import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBestPageBySlug, getAllBestPageSlugs } from '@/data/best-pages';
import { BestPageTemplate } from '@/templates';
import { buildMetadata } from '@/lib/metadata';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBestPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getBestPageBySlug(params.slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/best/${page.slug}`,
  });
}

export default function BestPage({ params }: PageProps) {
  const page = getBestPageBySlug(params.slug);
  if (!page) notFound();

  return <BestPageTemplate page={page} />;
}
