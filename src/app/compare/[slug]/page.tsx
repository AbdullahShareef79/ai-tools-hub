import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getComparisonBySlug, getAllComparisonSlugs } from '@/data/comparisons';
import { ComparePageTemplate } from '@/templates';
import { buildMetadata } from '@/lib/metadata';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) return {};

  return buildMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    path: `/compare/${comparison.slug}`,
  });
}

export default function ComparePage({ params }: PageProps) {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) notFound();

  return <ComparePageTemplate comparison={comparison} />;
}
