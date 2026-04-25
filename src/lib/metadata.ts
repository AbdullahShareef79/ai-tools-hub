import type { Metadata } from 'next';

// Production URL — update this if you add a custom domain.
const SITE_URL = 'https://ai-tools-hub-beryl.vercel.app';
const SITE_NAME = 'AI Tools Hub';
const DEFAULT_DESCRIPTION =
  'Discover, compare, and choose the best AI tools for studying, voice-to-text, dictation, and more. Honest reviews, detailed comparisons, and expert recommendations.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export function buildMetadata({
  title,
  description,
  path = '',
  ogType = 'website',
  ogImage,
  publishedTime,
  modifiedTime,
  noIndex = false,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '' ? title : `${title} | ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description,
    ...(keywords && { keywords: keywords.join(', ') }),
    ...(noIndex && { robots: { index: false, follow: true } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(ogType === 'article' && {
        authors: ['AI Tools Hub'],
        section: 'Technology',
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — Discover & Compare the Best AI Tools`,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: 'AI tools, best AI tools, AI study tools, voice to text, dictation software, AI comparison, AI reviews 2026',
    openGraph: {
      title: `${SITE_NAME} — Discover & Compare the Best AI Tools`,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Discover & Compare the Best AI Tools`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME} — Discover & Compare the Best AI Tools`,
      description: DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google8f47ec133ff8c5aa',
    },
    other: {
      'msvalidate.01': '',
    },
  };
}

export { SITE_URL, SITE_NAME };
