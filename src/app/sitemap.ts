import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { comparisons } from '@/data/comparisons';
import { blogPosts } from '@/data/blog-posts';
import { bestPages, getAllUniqueToolSlugs } from '@/data/best-pages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-tools-hub-beryl.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/categories`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Best (category) pages
  const bestPageUrls: MetadataRoute.Sitemap = bestPages.map((page) => ({
    url: `${SITE_URL}/best/${page.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Comparison pages
  const comparisonUrls: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Individual tool review pages
  const toolUrls: MetadataRoute.Sitemap = getAllUniqueToolSlugs().map((slug) => ({
    url: `${SITE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...bestPageUrls, ...comparisonUrls, ...blogUrls, ...toolUrls];
}
