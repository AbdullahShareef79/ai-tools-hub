/**
 * Pre-build script: generates public/sitemap.xml from the data files.
 * Runs before `next build` so the sitemap is a plain static asset —
 * no ISR, no cache, no stale URLs.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const SITE_URL = 'https://ai-tools-hub-beryl.vercel.app';
const NOW = new Date().toISOString();

// --- Helpers to extract slugs from TS data files using regex ---

function extractTopLevelSlugs(content) {
  // Matches top-level slug fields (4-space indent) like:  slug: 'value',
  const matches = [...content.matchAll(/^    slug: '([^']+)'/gm)];
  const seen = new Set();
  return matches
    .map((m) => m[1])
    .filter((s) => {
      if (seen.has(s)) return false;
      seen.add(s);
      return true;
    });
}

function extractToolSlugs(content) {
  // Tool slugs are at 8-space indent
  const matches = [...content.matchAll(/^        slug: '([^']+)'/gm)];
  const seen = new Set();
  return matches
    .map((m) => m[1])
    .filter((s) => {
      if (seen.has(s)) return false;
      seen.add(s);
      return true;
    });
}

function extractBlogSlugs(content) {
  // Blog post slugs at 4-space indent
  const matches = [...content.matchAll(/^\s{4}slug: '([^']+)'/gm)];
  return matches.map((m) => m[1]);
}

function extractBlogDates(content) {
  // Pair each slug with its updatedAt
  const slugs = [...content.matchAll(/^\s{4}slug: '([^']+)'/gm)];
  const dates = [...content.matchAll(/^\s{4}updatedAt: '([^']+)'/gm)];
  return slugs.map((m, i) => ({
    slug: m[1],
    updatedAt: dates[i] ? dates[i][1] : NOW,
  }));
}

function extractBestPageSlugs(content) {
  const matches = [...content.matchAll(/^    slug: '([^']+)'/gm)];
  return matches.map((m) => m[1]);
}

// --- Read data files ---

const bestPagesContent = readFileSync(
  resolve(ROOT, 'src/data/best-pages.ts'),
  'utf-8'
);
const comparisonsContent = readFileSync(
  resolve(ROOT, 'src/data/comparisons.ts'),
  'utf-8'
);
const blogPostsContent = readFileSync(
  resolve(ROOT, 'src/data/blog-posts.ts'),
  'utf-8'
);

// --- Extract slugs ---

const bestPageSlugs = extractBestPageSlugs(bestPagesContent);
const toolSlugs = extractToolSlugs(bestPagesContent);
const comparisonSlugs = extractTopLevelSlugs(comparisonsContent);
const blogEntries = extractBlogDates(blogPostsContent);

// --- Build URL entries ---

function entry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  // Static pages
  entry(`${SITE_URL}/`, NOW, 'weekly', '1.0'),
  entry(`${SITE_URL}/categories`, NOW, 'weekly', '0.8'),
  entry(`${SITE_URL}/tools`, NOW, 'weekly', '0.9'),
  entry(`${SITE_URL}/about`, NOW, 'monthly', '0.5'),
  entry(`${SITE_URL}/contact`, NOW, 'monthly', '0.4'),
  entry(`${SITE_URL}/blog`, NOW, 'weekly', '0.8'),
  entry(`${SITE_URL}/privacy`, NOW, 'yearly', '0.2'),
  entry(`${SITE_URL}/terms`, NOW, 'yearly', '0.2'),
  // Best pages
  ...bestPageSlugs.map((s) =>
    entry(`${SITE_URL}/best/${s}`, NOW, 'weekly', '0.9')
  ),
  // Comparisons
  ...comparisonSlugs.map((s) =>
    entry(`${SITE_URL}/compare/${s}`, NOW, 'monthly', '0.8')
  ),
  // Blog posts
  ...blogEntries.map((b) =>
    entry(`${SITE_URL}/blog/${b.slug}`, b.updatedAt, 'monthly', '0.7')
  ),
  // Tool review pages
  ...toolSlugs.map((s) =>
    entry(`${SITE_URL}/tools/${s}`, NOW, 'monthly', '0.8')
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outPath = resolve(ROOT, 'public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');

console.log(`✅ Generated sitemap.xml with ${urls.length} URLs → ${outPath}`);
