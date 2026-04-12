import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/data/blog-posts';
import { getComparisonBySlug } from '@/data/comparisons';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonCard from '@/components/ComparisonCard';
import { ArticleJsonLd } from '@/components/JsonLd';
import { AdPlaceholder } from '@/components/AdSense';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

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

  // Get related posts (other posts, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={`${SITE_URL}/blog/${post.slug}`}
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        author={post.author}
      />

      <div className="container-page section-padding">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <article className="mx-auto max-w-3xl">
          {/* Article header */}
          <header>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="badge bg-primary-50 text-primary-700">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>By {post.author}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
              {post.updatedAt !== post.publishedAt && (
                <>
                  <span>•</span>
                  <span>
                    Updated{' '}
                    {new Date(post.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </>
              )}
            </div>
          </header>

          <AdPlaceholder label="Ad Placement — Article Top" />

          {/* Article content */}
          <div
            className="prose-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <AdPlaceholder label="Ad Placement — Article Bottom" />

          {/* Related best pages */}
          {post.relatedBestPages.length > 0 && (
            <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Explore Related Categories</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {post.relatedBestPages.map((slug) => {
                  const cat = getCategoryBySlug(slug);
                  return (
                    <Link
                      key={slug}
                      href={`/best/${slug}`}
                      className="btn-primary text-sm"
                    >
                      {cat?.icon} Best {cat?.name || slug} →
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related comparisons */}
          {post.relatedComparisons.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900">Related Comparisons</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {post.relatedComparisons.map((slug) => {
                  const comp = getComparisonBySlug(slug);
                  if (!comp) return null;
                  return (
                    <ComparisonCard
                      key={slug}
                      title={comp.title}
                      slug={comp.slug}
                      toolAName={comp.toolA.name}
                      toolBName={comp.toolB.name}
                      verdict={comp.verdict}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </article>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">More Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="card group transition-all hover:border-primary-200"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {relPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {relPost.excerpt}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-medium text-primary-600">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
