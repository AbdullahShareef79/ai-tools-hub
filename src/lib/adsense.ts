/**
 * Server-safe AdSense utility.
 * Exported from a plain (non-client) module so Server Components can import it.
 */
export function isAdSenseEnabled(): boolean {
  const id = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-8689475230104463';
  return !!id && !id.includes('XXXX');
}
