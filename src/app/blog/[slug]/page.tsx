import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/data/blog-posts';
import { BlogPostTemplate } from '@/templates';
import { buildMetadata } from '@/lib/metadata';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  // Find topically related posts by matching relatedBestPages categories.
  // Fall back to most-recent posts if no topical match exists.
  const topicMatches = blogPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      p.relatedBestPages.some((s) => post.relatedBestPages.includes(s)),
  );
  const relatedPool = topicMatches.length >= 2 ? topicMatches : blogPosts.filter((p) => p.slug !== post.slug);
  const relatedPosts = relatedPool
    .slice(0, 2)
    .map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt }));

  return <BlogPostTemplate post={post} relatedPosts={relatedPosts} />;
}
