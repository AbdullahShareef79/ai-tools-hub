import Link from 'next/link';
import {
  Breadcrumbs,
  AuthorBox,
  RelatedComparisons,
  RelatedCategories,
  RelatedArticles,
  AdUnit,
  InArticleAd,
  MultiplexAd,
  AdPlaceholder,
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from '@/components';
import { isAdSenseEnabled } from '@/lib/adsense';
import { SITE_URL } from '@/lib/metadata';
import { getCategoryBySlug } from '@/data/categories';
import type { BlogPost } from '@/data/blog-posts';
import type { RelatedArticle } from '@/components';

/** Ad slot IDs — replace with your actual AdSense slot IDs */
const AD_SLOTS = {
  articleTop: '2345678901',
  articleMid: '2345678902',
  articleBottom: '2345678903',
};

interface BlogPostTemplateProps {
  post: BlogPost;
  /** Related articles to display at the bottom */
  relatedPosts?: RelatedArticle[];
}

/** Convert heading text to a URL-safe anchor ID */
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '') // strip any inline HTML tags
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Extract all h2 headings from HTML content for the TOC */
function extractHeadings(html: string): { id: string; label: string }[] {
  const matches = Array.from(html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi));
  return matches.map((m) => {
    const label = m[1].replace(/<[^>]+>/g, '').trim();
    return { id: slugifyHeading(label), label };
  });
}

/** Inject id attributes into h2 tags so TOC anchor links work */
function injectHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, '').trim();
    const id = slugifyHeading(label);
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
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
  const headings = extractHeadings(post.content);
  const contentWithIds = injectHeadingIds(post.content);
  const showToc = headings.length >= 3;
  const adsEnabled = isAdSenseEnabled();

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
        image={`${SITE_URL}/og-default.png`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]}
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

          {/* Ad: After header — early engagement = high viewability */}
          {adsEnabled ? (
            <InArticleAd slot={AD_SLOTS.articleTop} className="my-8" />
          ) : (
            <AdPlaceholder label="Ad Placement — Article Top" />
          )}

          {/* Table of Contents — shown when post has 3+ h2 headings */}
          {showToc && (
            <nav
              className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5"
              aria-label="Table of contents"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                In This Article
              </p>
              <ol className="space-y-2">
                {headings.map((h, i) => (
                  <li key={h.id} className="flex items-baseline gap-2">
                    <span className="text-xs font-medium text-slate-400 tabular-nums w-4 shrink-0">
                      {i + 1}.
                    </span>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug"
                    >
                      {h.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Quick-pick CTA — drives readers to the ranked best-page before they bounce */}
          {post.relatedBestPages.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <div>
                <p className="text-sm font-semibold text-indigo-700">🏆 Looking for the best pick?</p>
                <p className="text-sm text-slate-600 mt-0.5">We tested and ranked every option — see the full breakdown.</p>
              </div>
              <Link href={`/best/${post.relatedBestPages[0]}`} className="btn-primary whitespace-nowrap text-sm shrink-0">
                See Top Picks →
              </Link>
            </div>
          )}

          {/* Article content */}
          <div
            className="prose-content mt-8"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />

          {/* Ad: After content — decision point for engaged readers */}
          {adsEnabled ? (
            <AdUnit slot={AD_SLOTS.articleMid} format="horizontal" className="my-10" />
          ) : (
            <AdPlaceholder label="Ad Placement — Article Bottom" />
          )}

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

        {/* Multiplex ad: Content recommendations to drive pageviews */}
        {adsEnabled ? (
          <div className="mx-auto max-w-3xl">
            <MultiplexAd slot={AD_SLOTS.articleBottom} className="my-10" />
          </div>
        ) : (
          <AdPlaceholder label="Ad Placement — Article Multiplex (Recommendations)" />
        )}

        {/* Related articles */}
        <div className="mx-auto mt-16 max-w-3xl">
          <RelatedArticles articles={relatedPosts} />
        </div>
      </div>
    </>
  );
}
