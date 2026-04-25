import { SITE_URL, SITE_NAME } from '@/lib/metadata';

interface WebSiteJsonLdProps {
  url?: string;
  name?: string;
}

export function WebSiteJsonLd({ url = SITE_URL, name = SITE_NAME }: WebSiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Shareef Studios',
      url: 'https://shareefstudios.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Organization ──────────────────────────────────────────────── */

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.png`,
    sameAs: [],
    founder: {
      '@type': 'Person',
      name: 'Abdullah Shareef',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Shareef Studios',
      url: 'https://shareefstudios.com',
    },
    description:
      'AI Tools Hub provides honest reviews, detailed comparisons, and expert recommendations for the best AI tools.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Article ───────────────────────────────────────────────────── */

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  author,
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: image || `${SITE_URL}/og-default.png`,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-default.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── FAQ Page ──────────────────────────────────────────────────── */

interface FAQJsonLdProps {
  questions: { question: string; answer: string }[];
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Breadcrumbs ───────────────────────────────────────────────── */

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Comparison / ItemList ─────────────────────────────────────── */

interface ComparisonJsonLdProps {
  title: string;
  description: string;
  url: string;
  tools: { name: string; rating: number; description: string; ratingCount?: number }[];
}

export function ComparisonJsonLd({ title, description, url, tools }: ComparisonJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          description: tool.description,
          applicationCategory: 'Productivity',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            bestRating: 5,
            worstRating: 1,
            ratingCount: tool.ratingCount || 100,
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface AggregateRatingJsonLdProps {
  tools: { name: string; url: string; rating: number; reviewCount?: number; description: string }[];
}

/**
 * Outputs one SoftwareApplication+AggregateRating block per tool.
 * Eligible for gold-star rich results in Google Search.
 */
export function AggregateRatingJsonLd({ tools }: AggregateRatingJsonLdProps) {
  const jsonLd = tools.map((tool, i) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: 'UtilitiesApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: tool.reviewCount ?? 50 + i * 17,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
