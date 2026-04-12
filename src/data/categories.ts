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
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
