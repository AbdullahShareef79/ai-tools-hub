import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for AI Tools Hub. Read our terms and conditions for using the website.',
  path: '/terms',
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <article className="mx-auto max-w-3xl prose-content">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <p className="mt-6 text-lg">
          Welcome to AI Tools Hub. By accessing and using our website, you agree to these Terms of
          Service. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using AI Tools Hub (&quot;the Site&quot;), you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the Site.
        </p>

        <h2>2. Content and Reviews</h2>
        <p>
          The reviews, comparisons, and recommendations on this site represent our honest opinions
          based on hands-on testing. However:
        </p>
        <ul>
          <li>Content is provided for informational purposes only</li>
          <li>We make no guarantees about the accuracy or completeness of any review</li>
          <li>Tool features and pricing may change after our review date</li>
          <li>Your experience with any tool may differ from ours</li>
        </ul>

        <h2>3. Affiliate Relationships &amp; Disclosure</h2>
        <p>
          AI Tools Hub may feature products that are built by our team (Abdullah Shareef / Shareef
          Studios). These products are always clearly labeled as &quot;Our Product&quot; in reviews.
          In the future, we may also earn commissions from affiliate links to third-party products.
          These relationships never influence our review scores or recommendations.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on AI Tools Hub — including text, graphics, design, and code — is owned by
          Shareef Studios unless otherwise noted. You may not reproduce, distribute, or modify our
          content without permission.
        </p>

        <h2>5. External Links</h2>
        <p>
          Our site contains links to third-party websites and products. We are not responsible for
          the content, privacy practices, or terms of these external sites.
        </p>

        <h2>6. Advertising</h2>
        <p>
          We display advertisements through Google AdSense and may display other ads in the future.
          Ads are clearly distinguishable from editorial content. The presence of an advertisement
          does not constitute an endorsement.
        </p>

        <h2>7. User Conduct</h2>
        <p>When using our site, you agree not to:</p>
        <ul>
          <li>Attempt to disrupt or compromise the site&apos;s functionality</li>
          <li>Scrape or collect content without permission</li>
          <li>Submit false or misleading information through our forms</li>
          <li>Use the site for any unlawful purpose</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          AI Tools Hub and its creators shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from your use of the site or reliance on any information
          provided.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of the site after
          changes constitutes acceptance of the new terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these terms? Contact us at{' '}
          <a href="mailto:hello@aitoolshub.dev">hello@aitoolshub.dev</a>.
        </p>
      </article>
    </div>
  );
}
