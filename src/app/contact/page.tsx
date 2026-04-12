import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the AI Tools Hub team. Send us your questions, feedback, tool suggestions, or partnership inquiries.',
  path: '/contact',
  noIndex: true,
});

export default function ContactPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Have a question, suggestion, or want to work with us? We&apos;d love to hear from you.
          Fill out the form below or reach out via email.
        </p>

        <div className="mt-10 card">
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="space-y-6"
          >
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="general">General Inquiry</option>
                <option value="suggestion">Tool Suggestion</option>
                <option value="correction">Review Correction</option>
                <option value="partnership">Partnership / Business</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            You can also email us directly at{' '}
            <a href="mailto:hello@aitoolshub.dev" className="text-primary-600 hover:text-primary-700">
              hello@aitoolshub.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
