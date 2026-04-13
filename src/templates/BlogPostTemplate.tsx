import Link from 'next/link';
import {
  Breadcrumbs,
  AuthorBox,
  RelatedComparisons,
  RelatedCategories,
  RelatedArticles,
  AdPlaceholder,
  ArticleJsonLd,
} from '@/components';
import { SITE_URL } from '@/lib/metadata';
import { getCategoryBySlug } from '@/data/categories';
import type { BlogPost } from '@/data/blog-posts';
import type { RelatedArticle } from '@/components';

interface BlogPostTemplateProps {
  post: BlogPost;
  /** Related articles to display at the bottom */
  relatedPosts?: RelatedArticle[];
}

/**
 * Reusable template for blog / article pages.
 *
 * Usage (in your page.tsx):
 * ```tsx
 * import BlogPostTemplate from '@/templates/BlogPostTemplate';
 * const post = getBlogPostBySlug(params.slug);
 * const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);
 * return <BlogPostTemplate post={post} relatedPosts={related} />;
 * ```
 */
export default function BlogPostTemplate({ post, relatedPosts = [] }: BlogPostTemplateProps) {
  return (
    <>
      {/* Structured data */}
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
            <AuthorBox
              name={post.author}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
              readingTime={post.readingTime}
              tags={post.tags}
            />

            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {post.title}
            </h1>

            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <p className="mt-3 text-sm text-slate-500">
                🔄 Last updated:{' '}
                <time dateTime={post.updatedAt}>
                  {new Date(post.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </p>
            )}
          </header>

          <AdPlaceholder label="Ad Placement — Article Top" />

          {/* Article content */}
          <div
            className="prose-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <AdPlaceholder label="Ad Placement — Article Bottom" />

          {/* Social sharing */}
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
            <span className="text-sm font-medium text-slate-600">Found this helpful? Share it:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              𝕏 Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              in LinkedIn
            </a>
          </div>

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
          <div className="mt-8">
            <RelatedComparisons slugs={post.relatedComparisons} columns={2} />
          </div>
        </article>

        {/* Related articles */}
        <div className="mx-auto mt-16 max-w-3xl">
          <RelatedArticles articles={relatedPosts} />
        </div>
      </div>
    </>
  );
}
