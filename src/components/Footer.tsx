import Link from 'next/link';
import { products } from '@/data/products';

const footerLinks = {
  'Best Tools': [
    { name: 'AI Study Tools', href: '/best/ai-study-tools' },
    { name: 'Voice-to-Text Apps', href: '/best/voice-to-text-apps' },
    { name: 'Dictation Software', href: '/best/dictation-software' },
    { name: 'Muslim Apps', href: '/best/muslim-apps' },
    { name: 'AI Note-Taking Tools', href: '/best/ai-note-taking-tools' },
    { name: 'AI for College Students', href: '/best/ai-tools-for-college-students' },
    { name: 'Dictation for Windows', href: '/best/dictation-software-for-windows' },
  ],
  Compare: [
    { name: 'StudyBuddy vs Anki', href: '/compare/studybuddy-vs-anki' },
    { name: 'ScribAI vs VoiceScribe', href: '/compare/scribai-vs-voicescribe' },
    { name: 'VoiceScribe vs Otter', href: '/compare/voicescribe-vs-otter' },
    { name: 'AI Tools for Students', href: '/compare/best-ai-tools-for-students' },
    { name: 'StudyBuddy vs Quizlet', href: '/compare/studybuddy-vs-quizlet' },
    { name: 'ScribAI vs Dragon', href: '/compare/scribai-vs-dragon' },
    { name: 'VoiceScribe vs Google Docs', href: '/compare/voicescribe-vs-google-docs-voice-typing' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Categories', href: '/categories' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary-600">
              <span className="text-xl" aria-hidden="true">⚡</span>
              <span>AI Tools Hub</span>
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Discover, compare, and choose the best AI tools. Honest reviews and detailed comparisons.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-slate-900">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Our Products section */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold text-slate-900">
            Our Products — Built by Abdullah Shareef / Shareef Studios
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
              >
                <span className="text-2xl" aria-hidden="true">{product.icon}</span>
                <div>
                  <p className="text-sm font-medium text-slate-900">{product.name}</p>
                  <p className="text-xs text-slate-500">{product.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AI Tools Hub. Built by{' '}
            <a
              href="https://shareefstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              Shareef Studios
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-primary-600">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-primary-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
