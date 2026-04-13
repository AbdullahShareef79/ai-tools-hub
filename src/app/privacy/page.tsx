import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for AI Tools Hub. Learn how we collect, use, and protect your data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <article className="mx-auto max-w-3xl prose-content">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <p className="mt-6 text-lg">
          Your privacy is important to us. This Privacy Policy explains how AI Tools Hub
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
          information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Usage data:</strong> Pages visited, time spent, referral sources, and
            browser/device information collected automatically via analytics.
          </li>
          <li>
            <strong>Contact information:</strong> Name and email address if you voluntarily
            submit them through our contact form.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies for analytics and advertising purposes.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To improve our website content and user experience</li>
          <li>To respond to inquiries submitted through our contact form</li>
          <li>To display relevant advertisements via Google AdSense</li>
          <li>To analyze website traffic and usage patterns</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li>
            <strong>Google AdSense:</strong> Displays advertisements. Google may use cookies to
            serve ads based on your prior visits. You can opt out at{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>.
          </li>
          <li>
            <strong>Google Analytics:</strong> Collects anonymous usage data to help us understand
            how visitors use our site.
          </li>
          <li>
            <strong>Vercel:</strong> Our hosting provider. See{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel&apos;s Privacy Policy
            </a>.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Our site uses cookies — small text files stored on your device. These are used for
          analytics and advertising. You can control cookie settings in your browser preferences.
        </p>

        <h2>External Links</h2>
        <p>
          Our site contains links to external websites and products. We are not responsible for the
          privacy practices of these external sites. We encourage you to review their privacy
          policies.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect any information we collect. However,
          no method of transmission over the Internet is 100% secure.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for children under 13. We do not knowingly collect personal
          information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@aitoolshub.dev">hello@aitoolshub.dev</a>.
        </p>
      </article>
    </div>
  );
}
