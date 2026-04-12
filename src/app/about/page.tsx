import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About AI Tools Hub',
  description:
    'Learn about AI Tools Hub — who we are, how we review tools, and our mission to help you find the best AI tools through honest, transparent reviews and comparisons.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="container-page section-padding">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          About AI Tools Hub
        </h1>

        <div className="prose-content mt-8">
          <p className="text-lg">
            AI Tools Hub is your trusted source for discovering, comparing, and choosing the best
            AI-powered tools. We believe that honest, transparent reviews help people make better
            decisions — and we&apos;re committed to that mission.
          </p>

          <h2>Our Mission</h2>
          <p>
            The AI tool landscape is growing fast, and it&apos;s hard to tell which products are genuinely
            good and which are just well-marketed. Our mission is simple: test real tools, share honest
            findings, and help you choose the best option for your specific needs.
          </p>
          <p>
            We don&apos;t write generic listicles. Every tool we review is tested hands-on. Every comparison
            includes real pros and cons — even for tools we&apos;ve built ourselves.
          </p>

          <h2>How We Review</h2>
          <p>Our review process follows three core principles:</p>
          <ul>
            <li>
              <strong>Hands-on testing:</strong> We use every tool we review. No secondhand information
              or paraphrased feature lists.
            </li>
            <li>
              <strong>Honest assessments:</strong> Every tool has strengths and weaknesses. We highlight
              both, even when reviewing our own products.
            </li>
            <li>
              <strong>Regular updates:</strong> AI tools evolve quickly. We revisit our reviews
              regularly to ensure accuracy.
            </li>
          </ul>

          <h2>Our Products</h2>
          <p>
            AI Tools Hub is built by{' '}
            <a href="https://shareefstudios.com" target="_blank" rel="noopener noreferrer">
              Abdullah Shareef / Shareef Studios
            </a>
            . We&apos;re also the makers of several AI-powered tools that we feature on this site.
            Transparency is important to us — our own products are always clearly labeled, and we
            include honest pros and cons for them just like any other tool.
          </p>
        </div>

        {/* Products grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 transition-all hover:border-primary-200"
            >
              <span className="text-3xl" aria-hidden="true">{product.icon}</span>
              <div>
                <h3 className="font-bold text-slate-900">{product.name}</h3>
                <p className="text-sm text-slate-500">{product.tagline}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="prose-content mt-10">
          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or suggestions? We&apos;d love to hear from you. Visit our{' '}
            <Link href="/contact">contact page</Link> to get in touch.
          </p>
        </div>
      </article>
    </div>
  );
}
