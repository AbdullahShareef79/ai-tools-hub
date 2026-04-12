export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  categorySlug: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'studybuddy',
    name: 'StudyBuddy',
    tagline: 'AI-powered study companion',
    description:
      'StudyBuddy uses artificial intelligence to help students learn faster and retain more. Generate flashcards, quizzes, summaries, and study plans from any material â€” all powered by AI.',
    url: 'https://web-nu-umber-29.vercel.app',
    icon: 'ðŸ“š',
    category: 'AI Study Tools',
    categorySlug: 'ai-study-tools',
    features: [
      'AI-generated flashcards & quizzes',
      'Smart study plans',
      'Document summarization',
      'Progress tracking',
      'Multi-format support (PDF, notes, textbooks)',
      'Spaced repetition',
    ],
  },
  {
    id: 'scribai',
    name: 'ScribAI',
    tagline: 'Windows dictation & voice-to-text',
    description:
      'ScribAI is a powerful Windows desktop application for real-time dictation and voice-to-text. Type with your voice anywhere on your PC with high accuracy and speed.',
    url: 'https://scrib-ai-six.vercel.app',
    icon: 'ðŸŽ™ï¸',
    category: 'Dictation Software',
    categorySlug: 'dictation-software',
    features: [
      'Real-time voice-to-text',
      'Works in any Windows application',
      'High accuracy transcription',
      'Custom vocabulary support',
      'Punctuation commands',
      'Low latency dictation',
    ],
  },
  {
    id: 'voicescribe',
    name: 'VoiceScribe AI',
    tagline: 'Mobile voice-to-text & transcription',
    description:
      'VoiceScribe AI turns your phone into a professional transcription tool. Record meetings, lectures, interviews, and more â€” then get accurate transcripts powered by AI.',
    url: 'https://voice-scrib-ai.vercel.app',
    icon: 'ðŸ—£ï¸',
    category: 'Voice-to-Text Apps',
    categorySlug: 'voice-to-text-apps',
    features: [
      'Mobile-first transcription',
      'AI-powered accuracy',
      'Meeting & lecture recording',
      'Export to multiple formats',
      'Speaker identification',
      'Real-time transcription',
    ],
  },
  {
    id: 'noor',
    name: 'Noor â€” Muslim Friend',
    tagline: 'Muslim lifestyle & Islamic tools app',
    description:
      'Noor (Muslim Friend) is a comprehensive Islamic lifestyle app featuring prayer times, Quran reading, dhikr counters, dua collections, Qibla finder, and much more â€” all in one beautiful app.',
    url: 'https://muslim-friend.vercel.app',
    icon: 'ðŸŒ™',
    category: 'Muslim Apps',
    categorySlug: 'muslim-apps',
    features: [
      'Accurate prayer times',
      'Full Quran with translations',
      'Dua & dhikr collections',
      'Qibla compass',
      'Islamic calendar',
      'Daily reminders & notifications',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
