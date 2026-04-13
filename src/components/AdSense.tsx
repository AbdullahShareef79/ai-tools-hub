'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-8689475230104463';

/** Pages where ads should NOT be shown */
const NO_AD_PATHS = ['/privacy', '/terms', '/contact', '/about'];

/** Returns true when AdSense is properly configured */
function isAdSenseEnabled(): boolean {
  return !!ADSENSE_CLIENT_ID && !ADSENSE_CLIENT_ID.includes('XXXX');
}

/* ─── Global Script ────────────────────────────────────────────── */

/**
 * AdSense head script — include once in layout.tsx `<head>`.
 * Renders nothing when the env var is missing or still a placeholder.
 */
export function AdSenseScript() {
  if (!isAdSenseEnabled()) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}

/* ─── Display Ad Unit ──────────────────────────────────────────── */

/**
 * Standard AdSense display ad.
 * Safely handles duplicate pushes on client-side navigation.
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
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    // Reset on route change
    pushed.current = false;
  }, [pathname]);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle not loaded yet
    }
  }, [pathname]);

  // Don't show ads on excluded pages
  if (NO_AD_PATHS.some((path) => pathname.startsWith(path))) return null;
  if (!isAdSenseEnabled()) return null;

  return (
    <div className={`ad-container my-8 text-center ${className}`}>
      <ins
        ref={adRef}
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

/* ─── In-Article Ad ────────────────────────────────────────────── */

/**
 * In-article native ad — blends with article content.
 * Use inside blog posts and long-form pages.
 */
export function InArticleAd({
  slot,
  className = '',
}: {
  slot: string;
  className?: string;
}) {
  const pathname = usePathname();
  const pushed = useRef(false);

  useEffect(() => {
    pushed.current = false;
  }, [pathname]);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle not loaded yet
    }
  }, [pathname]);

  if (NO_AD_PATHS.some((path) => pathname.startsWith(path))) return null;
  if (!isAdSenseEnabled()) return null;

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
}

/* ─── Multiplex Ad ─────────────────────────────────────────────── */

/**
 * Multiplex / content recommendation ad — great for end of articles.
 */
export function MultiplexAd({
  slot,
  className = '',
}: {
  slot: string;
  className?: string;
}) {
  const pathname = usePathname();
  const pushed = useRef(false);

  useEffect(() => {
    pushed.current = false;
  }, [pathname]);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle not loaded yet
    }
  }, [pathname]);

  if (NO_AD_PATHS.some((path) => pathname.startsWith(path))) return null;
  if (!isAdSenseEnabled()) return null;

  return (
    <div className={`ad-container my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
      />
    </div>
  );
}

/* ─── Dev Placeholder ──────────────────────────────────────────── */

/**
 * Visual placeholder shown only during development (when AdSense isn't configured).
 * Disappears in production when real ads load.
 */
export function AdPlaceholder({ label = 'Ad Placement' }: { label?: string }) {
  if (isAdSenseEnabled()) return null;

  return (
    <div className="my-8 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-400">
      📢 {label}
    </div>
  );
}
