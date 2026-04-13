'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Categories', href: '/categories' },
  {
    name: 'Best Tools',
    href: '#',
    children: [
      { name: 'AI Study Tools', href: '/best/ai-study-tools' },
      { name: 'Voice-to-Text Apps', href: '/best/voice-to-text-apps' },
      { name: 'Dictation Software', href: '/best/dictation-software' },
      { name: 'Muslim Apps', href: '/best/muslim-apps' },
      { name: 'AI Note-Taking Tools', href: '/best/ai-note-taking-tools' },
      { name: 'AI for College Students', href: '/best/ai-tools-for-college-students' },
      { name: 'Dictation for Windows', href: '/best/dictation-software-for-windows' },
      { name: 'AI Writing Tools', href: '/best/ai-writing-tools' },
      { name: 'AI Productivity Tools', href: '/best/ai-productivity-tools' },
    ],
  },
  {
    name: 'Compare',
    href: '#',
    children: [
      { name: 'StudyBuddy vs Anki', href: '/compare/studybuddy-vs-anki' },
      { name: 'ScribAI vs VoiceScribe', href: '/compare/scribai-vs-voicescribe' },
      { name: 'VoiceScribe vs Otter', href: '/compare/voicescribe-vs-otter' },
      { name: 'Best AI Tools for Students', href: '/compare/best-ai-tools-for-students' },
      { name: 'StudyBuddy vs Quizlet', href: '/compare/studybuddy-vs-quizlet' },
      { name: 'ScribAI vs Dragon', href: '/compare/scribai-vs-dragon' },
      { name: 'VoiceScribe vs Google Docs', href: '/compare/voicescribe-vs-google-docs-voice-typing' },
      { name: 'Grammarly vs ChatGPT', href: '/compare/grammarly-vs-chatgpt' },
      { name: 'Notion AI vs Obsidian', href: '/compare/notion-ai-vs-obsidian' },
      { name: 'Motion vs Reclaim.ai', href: '/compare/motion-vs-reclaim' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'All Tools', href: '/tools' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
          <span className="text-2xl" aria-hidden="true">⚡</span>
          <span>AI Tools Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  aria-expanded={openDropdown === item.name}
                >
                  {item.name}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.name}
              </Link>
            )
          )}
          <Link href="/about" className="ml-2 btn-primary !py-2 !px-4 text-sm">
            About Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-page py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.name}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 pl-6 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/about"
              className="block btn-primary mt-4 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
