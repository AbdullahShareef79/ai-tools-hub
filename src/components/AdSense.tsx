'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

// Pages where ads should NOT be shown
const NO_AD_PATHS = ['/privacy', '/terms', '/contact', '/about'];

/**
 * AdSense head script — include once in layout
 */
export function AdSenseScript() {
  if (!ADSENSE_CLIENT_ID || ADSENSE_CLIENT_ID.includes('XXXX')) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}

/**
 * AdSense display ad unit — place in page content
 */
export function AdUnit({
  slot,
  format = 'auto',
  className = '',
}: {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded
    }
  }, [pathname]);

  // Don't show ads on excluded pages
  if (NO_AD_PATHS.some((path) => pathname.startsWith(path))) return null;
  if (!ADSENSE_CLIENT_ID || ADSENSE_CLIENT_ID.includes('XXXX')) return null;

  return (
    <div className={`ad-container my-8 text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

/**
 * Placeholder for where an ad will go (for development)
 */
export function AdPlaceholder({ label = 'Ad Placement' }: { label?: string }) {
  if (ADSENSE_CLIENT_ID && !ADSENSE_CLIENT_ID.includes('XXXX')) return null;

  return (
    <div className="my-8 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-400">
      {label}
    </div>
  );
}
