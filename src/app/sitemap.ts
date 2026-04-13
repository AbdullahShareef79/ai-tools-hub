import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from '@/data/comparisons';
import { blogPosts } from '@/data/blog-posts';
import { bestPages, getAllUniqueToolSlugs } from '@/data/best-pages';

// Only trust NEXT_PUBLIC_SITE_URL when it points to a real custom domain.
// If it's a *.vercel.app URL it may be stale/wrong — use Vercel's injected vars instead.
const _envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
const _isCustomDomain = _envUrl.length > 0 && !_envUrl.includes('.vercel.app');
const SITE_URL: string =
  (_isCustomDomain ? _envUrl : null) ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ??
  'https://ai-tools-hub-beryl.vercel.app';

// Cache the sitemap for 24 hours
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/categories`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Best (category) pages — deduplicated from source
  const bestPageUrls: MetadataRoute.Sitemap = bestPages.map((page) => ({
    url: `${SITE_URL}/best/${page.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Comparison pages — getAllComparisonSlugs() already deduplicates
  const comparisonUrls: MetadataRoute.Sitemap = getAllComparisonSlugs().map((slug) => ({
    url: `${SITE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts — use actual updated dates as Date objects
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Individual tool review pages — getAllUniqueToolSlugs() already deduplicates
  const toolUrls: MetadataRoute.Sitemap = getAllUniqueToolSlugs().map((slug) => ({
    url: `${SITE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...bestPageUrls, ...comparisonUrls, ...blogUrls, ...toolUrls];
}
