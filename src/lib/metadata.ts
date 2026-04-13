import type { Metadata } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://ai-tools-hub-beryl.vercel.app');
const SITE_NAME = 'AI Tools Hub';
const DEFAULT_DESCRIPTION =
  'Discover, compare, and choose the best AI tools for studying, voice-to-text, dictation, and more. Honest reviews, detailed comparisons, and expert recommendations.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function buildMetadata({
  title,
  description,
  path = '',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '' ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
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
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fullTitle }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
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
    openGraph: {
      title: `${SITE_NAME} — Discover & Compare the Best AI Tools`,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Best AI Tools` }],
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
  };
}

export { SITE_URL, SITE_NAME };
