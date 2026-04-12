export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  toolCount: number;
}

export const categories: Category[] = [
  {
    slug: 'ai-study-tools',
    name: 'AI Study Tools',
    description:
      'AI-powered tools that help students learn faster, retain more, and ace their exams with smart study techniques.',
    longDescription:
      'Artificial intelligence is revolutionizing how students study. From generating flashcards and quizzes to creating personalized study plans, AI study tools save hours of manual work and boost retention. Whether you are in high school, college, or preparing for professional certifications, these tools adapt to your learning style.',
    metaTitle: 'Best AI Study Tools in 2026 — Reviews & Comparisons',
    metaDescription:
      'Discover the best AI study tools for students in 2026. Compare features, pricing, and effectiveness of top AI-powered learning apps including StudyBuddy, Anki, Quizlet, and more.',
    icon: '📚',
    toolCount: 5,
  },
  {
    slug: 'voice-to-text-apps',
    name: 'Voice-to-Text Apps',
    description:
      'Convert speech to text accurately with the best voice-to-text and transcription apps for mobile and desktop.',
    longDescription:
      'Voice-to-text technology has come a long way. Modern apps use advanced AI models to transcribe speech with near-human accuracy. Whether you need to transcribe meetings, lectures, interviews, or just dictate notes, these apps make it effortless. We compare accuracy, speed, language support, and pricing.',
    metaTitle: 'Best Voice-to-Text Apps in 2026 — Tested & Compared',
    metaDescription:
      'Find the best voice-to-text apps in 2026. We tested and compared top transcription tools including VoiceScribe AI, Otter.ai, and Whisper for accuracy, speed, and ease of use.',
    icon: '🗣️',
    toolCount: 5,
  },
  {
    slug: 'dictation-software',
    name: 'Dictation Software',
    description:
      'Type with your voice using the best dictation software for Windows, Mac, and web. Boost your productivity.',
    longDescription:
      'Dictation software lets you type with your voice, dramatically increasing your writing speed and reducing strain. The best dictation tools offer real-time transcription, custom commands, and work seamlessly across applications. We evaluate accuracy, latency, platform support, and integration capabilities.',
    metaTitle: 'Best Dictation Software in 2026 — Expert Reviews',
    metaDescription:
      'Compare the best dictation software in 2026. Expert reviews of ScribAI, Dragon NaturallySpeaking, Google Voice Typing, and more. Find the right voice typing tool for your workflow.',
    icon: '🎙️',
    toolCount: 5,
  },
  {
    slug: 'muslim-apps',
    name: 'Muslim Apps',
    description:
      'Essential Islamic lifestyle apps for prayer times, Quran reading, dua collections, and daily spiritual practice.',
    longDescription:
      'Muslim lifestyle apps have become indispensable for millions of Muslims worldwide. From accurate prayer time calculations to full Quran with translations, dhikr counters, and Qibla finders — the right app enriches your daily spiritual practice. We compare features, accuracy, design, and offline capabilities.',
    metaTitle: 'Best Muslim Apps in 2026 — Prayer Times, Quran & More',
    metaDescription:
      'Discover the best Muslim apps in 2026. Compare prayer time apps, Quran readers, dua collections, and Islamic lifestyle tools including Noor, Muslim Pro, and Quran.com.',
    icon: '🌙',
    toolCount: 5,
  },
  {
    slug: 'ai-note-taking-tools',
    name: 'AI Note-Taking Tools',
    description:
      'Smart note-taking apps that use AI to organize, summarize, and search your notes automatically.',
    longDescription:
      'AI note-taking tools go beyond basic text capture. They can transcribe audio, summarize meetings, tag and organize notes automatically, and even generate action items. Whether you are a student capturing lectures or a professional managing meeting notes, these tools save hours of manual effort.',
    metaTitle: 'Best AI Note-Taking Tools in 2026 — Reviews & Comparisons',
    metaDescription:
      'Discover the best AI note-taking tools in 2026. Compare Notion AI, Obsidian, Mem, Reflect, and more for smart note organization, summarization, and search.',
    icon: '📝',
    toolCount: 5,
  },
  {
    slug: 'ai-tools-for-college-students',
    name: 'AI Tools for College Students',
    description:
      'The best AI-powered tools every college student needs — from study aids to writing assistants to note-taking.',
    longDescription:
      'College students face a unique combination of heavy reading, exam prep, essay writing, and group projects. The best AI tools for college students handle multiple parts of this workflow: generating study materials, transcribing lectures, organizing notes, and helping with research. We evaluate tools specifically through the lens of the modern college experience.',
    metaTitle: 'Best AI Tools for College Students (2026) — Top Picks',
    metaDescription:
      'The best AI tools for college students in 2026. We tested study apps, note-taking tools, and writing assistants to find the ones that actually save time and improve grades.',
    icon: '🎓',
    toolCount: 5,
  },
  {
    slug: 'dictation-software-for-windows',
    name: 'Dictation Software for Windows',
    description:
      'The best dictation and voice typing software built specifically for Windows PCs — from free to professional.',
    longDescription:
      'Windows users have more dictation options than ever, from free built-in tools to powerful AI-driven desktop apps. The best Windows dictation software offers system-wide voice typing, custom commands, and high accuracy without requiring a browser. We test accuracy, latency, and Windows integration specifically.',
    metaTitle: 'Best Dictation Software for Windows (2026) — Expert Picks',
    metaDescription:
      'Find the best dictation software for Windows in 2026. We tested ScribAI, Dragon, Windows Voice Typing, and more to find the fastest and most accurate options for your PC.',
    icon: '🖥️',
    toolCount: 5,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
