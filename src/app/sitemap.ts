import type { MetadataRoute } from 'next';
import { bestPages } from '@/data/best-pages';
import { comparisons } from '@/data/comparisons';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/metadata';

// Stable last-modified date — update this when you make significant content changes
const LAST_UPDATED = '2026-04-25';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/categories`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/tools`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/compare`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/blog`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Best (category ranking) pages
  const bestPageEntries: MetadataRoute.Sitemap = bestPages.map((page) => ({
    url: `${SITE_URL}/best/${page.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Individual tool review pages
  const toolSlugs = new Set<string>();
  for (const page of bestPages) {
    for (const tool of page.tools) {
      toolSlugs.add(tool.slug);
    }
  }
  const toolEntries: MetadataRoute.Sitemap = Array.from(toolSlugs).map((slug) => ({
    url: `${SITE_URL}/tools/${slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Comparison pages
  const comparisonEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts — use actual updatedAt dates for accurate freshness signals
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...bestPageEntries,
    ...comparisonEntries,
    ...blogEntries,
    ...toolEntries,
  ];
}
