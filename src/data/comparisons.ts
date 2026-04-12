export interface ComparisonTool {
  name: string;
  slug: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  url: string;
  isOurProduct: boolean;
  rating: number;
  pricing: string;
}

export interface FeatureRow {
  feature: string;
  toolA: string;
  toolB: string;
}

export interface Comparison {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  toolA: ComparisonTool;
  toolB: ComparisonTool;
  features: FeatureRow[];
  verdict: string;
  verdictDetail: string;
  relatedSlugs: string[];
  relatedBestPages: string[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'studybuddy-vs-anki',
    title: 'StudyBuddy vs Anki',
    metaTitle: 'StudyBuddy vs Anki (2026) — Which Study Tool Is Better?',
    metaDescription:
      'Detailed comparison of StudyBuddy and Anki. Compare AI features, ease of use, pricing, flashcard systems, and which study tool is best for your learning goals in 2026.',
    intro:
      'Choosing the right study tool can make or break your exam prep. StudyBuddy and Anki are two of the most popular options — but they take very different approaches. StudyBuddy leverages AI to generate study materials automatically, while Anki is a veteran open-source flashcard app with a powerful spaced repetition system. In this comparison, we break down features, usability, and value to help you decide.',
    toolA: {
      name: 'StudyBuddy',
      slug: 'studybuddy',
      description:
        'An AI-powered study companion that generates flashcards, quizzes, and study plans from your materials automatically.',
      pros: [
        'AI generates flashcards and quizzes from any document',
        'Beautiful, modern interface with zero learning curve',
        'Smart study plans adapt to your progress',
        'Supports PDFs, notes, and textbook content',
        'Built-in summarization saves hours of reading',
      ],
      cons: [
        'Requires internet for AI features',
        'Newer platform with a growing community',
        'Premium features require subscription',
      ],
      bestFor: 'Students who want to save time and let AI handle the heavy lifting of creating study materials.',
      url: 'https://studybuddy.ing',
      isOurProduct: true,
      rating: 4.7,
      pricing: 'Free tier + Premium plans',
    },
    toolB: {
      name: 'Anki',
      slug: 'anki',
      description:
        'A free, open-source flashcard application with a powerful spaced repetition algorithm and a massive library of shared decks.',
      pros: [
        'Completely free on desktop and Android',
        'Extremely powerful spaced repetition algorithm',
        'Huge community with thousands of shared decks',
        'Highly customizable card templates',
        'Works offline',
      ],
      cons: [
        'Steep learning curve for new users',
        'Dated interface design',
        'iOS app costs $24.99',
        'No AI — you must create all cards manually',
        'Plugin system can be confusing',
      ],
      bestFor: 'Power users who want full control over their flashcard system and don\'t mind the learning curve.',
      url: 'https://apps.ankiweb.net',
      isOurProduct: false,
      rating: 4.5,
      pricing: 'Free (iOS: $24.99)',
    },
    features: [
      { feature: 'AI Content Generation', toolA: '✅ Yes', toolB: '❌ No' },
      { feature: 'Spaced Repetition', toolA: '✅ Yes', toolB: '✅ Yes (SRS)' },
      { feature: 'Flashcards', toolA: '✅ AI-generated', toolB: '✅ Manual creation' },
      { feature: 'Quiz Generation', toolA: '✅ Automatic', toolB: '❌ Manual only' },
      { feature: 'PDF/Document Import', toolA: '✅ Yes', toolB: '⚠️ With plugins' },
      { feature: 'Mobile App', toolA: '✅ Yes', toolB: '✅ Yes' },
      { feature: 'Offline Mode', toolA: '⚠️ Limited', toolB: '✅ Full offline' },
      { feature: 'Community Decks', toolA: '🔜 Coming soon', toolB: '✅ Thousands available' },
      { feature: 'Ease of Use', toolA: '⭐ Very easy', toolB: '⭐ Steep curve' },
      { feature: 'Price', toolA: 'Free + Premium', toolB: 'Free (iOS $24.99)' },
      { feature: 'Study Plan Generation', toolA: '✅ AI-created schedules', toolB: '❌ Manual scheduling' },
      { feature: 'Document Summarization', toolA: '✅ AI summaries', toolB: '❌ Not available' },
      { feature: 'Setup Time', toolA: '~2 minutes', toolB: '~30 minutes to learn' },
    ],
    verdict: 'StudyBuddy for ease and AI power; Anki for free, manual control.',
    verdictDetail:
      'If you want a study tool that does the work for you — generating flashcards, quizzes, and study plans from your documents — StudyBuddy is the clear winner. Its AI-first approach saves hours of manual card creation. However, if you prefer full control over every flashcard template, want offline access, and don\'t mind the learning curve, Anki\'s open-source power is hard to beat. For most students in 2026, we recommend starting with StudyBuddy for its speed and simplicity, then supplementing with Anki for specialized decks.',
    relatedSlugs: ['best-ai-tools-for-students'],
    relatedBestPages: ['ai-study-tools'],
  },
  {
    slug: 'scribai-vs-voicescribe',
    title: 'ScribAI vs VoiceScribe AI',
    metaTitle: 'ScribAI vs VoiceScribe AI (2026) — Desktop vs Mobile Voice-to-Text',
    metaDescription:
      'Compare ScribAI and VoiceScribe AI head-to-head. Which voice-to-text tool is best for desktop dictation vs mobile transcription? Full feature comparison inside.',
    intro:
      'Both ScribAI and VoiceScribe AI are built for converting speech to text — but they serve different use cases. ScribAI is a Windows desktop dictation tool designed for typing by voice in any application, while VoiceScribe AI is a mobile-first transcription app for recording and transcribing meetings, lectures, and more. Let\'s break down which one is right for you.',
    toolA: {
      name: 'ScribAI',
      slug: 'scribai',
      description:
        'A Windows desktop dictation tool that lets you type with your voice in any application with high accuracy and low latency.',
      pros: [
        'Works system-wide in any Windows app',
        'Very low latency real-time dictation',
        'Excellent accuracy with custom vocabulary',
        'Voice commands for punctuation and formatting',
        'Designed specifically for desktop productivity',
      ],
      cons: [
        'Windows only — no Mac or Linux support',
        'Focused on dictation, not long-form transcription',
        'Requires a decent microphone for best results',
      ],
      bestFor: 'Windows users who want to type faster using voice dictation across all their desktop applications.',
      url: 'https://scribai.com',
      isOurProduct: true,
      rating: 4.6,
      pricing: 'Free tier + Premium',
    },
    toolB: {
      name: 'VoiceScribe AI',
      slug: 'voicescribe',
      description:
        'A mobile transcription app that records and transcribes meetings, lectures, and conversations with AI-powered accuracy.',
      pros: [
        'Mobile-first — record anywhere on the go',
        'AI-powered transcription with speaker identification',
        'Great for meetings, lectures, and interviews',
        'Export to multiple formats (TXT, DOCX, SRT)',
        'Real-time transcription display',
      ],
      cons: [
        'Mobile app — not designed for desktop dictation',
        'Requires good audio quality for best accuracy',
        'Some advanced features are premium only',
      ],
      bestFor: 'People who need to record and transcribe meetings, lectures, or conversations on their phone.',
      url: 'https://voicescribeai.com',
      isOurProduct: true,
      rating: 4.5,
      pricing: 'Free tier + Premium',
    },
    features: [
      { feature: 'Primary Platform', toolA: '🖥️ Windows Desktop', toolB: '📱 Mobile (iOS/Android)' },
      { feature: 'Use Case', toolA: 'Real-time dictation', toolB: 'Recording & transcription' },
      { feature: 'Real-time Typing', toolA: '✅ Yes — types as you speak', toolB: '✅ Real-time display' },
      { feature: 'Meeting Recording', toolA: '❌ Not designed for this', toolB: '✅ Core feature' },
      { feature: 'Speaker Identification', toolA: '❌ No', toolB: '✅ Yes' },
      { feature: 'Works in Any App', toolA: '✅ System-wide', toolB: '❌ In-app only' },
      { feature: 'Export Formats', toolA: 'Text (via clipboard)', toolB: 'TXT, DOCX, SRT' },
      { feature: 'Custom Vocabulary', toolA: '✅ Yes', toolB: '⚠️ Limited' },
      { feature: 'Voice Commands', toolA: '✅ Yes', toolB: '❌ No' },
      { feature: 'Offline Mode', toolA: '⚠️ Limited', toolB: '⚠️ Limited' },
      { feature: 'Accuracy (clear audio)', toolA: '~96%', toolB: '~95%' },
      { feature: 'Best Use Case', toolA: 'Desktop productivity typing', toolB: 'Mobile meeting/lecture recording' },
      { feature: 'Learning Curve', toolA: 'Low — start dictating immediately', toolB: 'Low — tap record and go' },
    ],
    verdict: 'ScribAI for desktop dictation; VoiceScribe AI for mobile transcription.',
    verdictDetail:
      'These two tools complement each other perfectly. Use ScribAI when you\'re at your Windows PC and want to type emails, documents, or messages by voice. Use VoiceScribe AI when you\'re on the go and need to record and transcribe meetings, lectures, or interviews. Many users actually benefit from having both — ScribAI for desktop productivity and VoiceScribe AI for mobile transcription. If you can only choose one, pick based on where you do most of your work.',
    relatedSlugs: ['voicescribe-vs-otter'],
    relatedBestPages: ['voice-to-text-apps', 'dictation-software'],
  },
  {
    slug: 'voicescribe-vs-otter',
    title: 'VoiceScribe AI vs Otter.ai',
    metaTitle: 'VoiceScribe AI vs Otter.ai (2026) — Best Transcription App Compared',
    metaDescription:
      'VoiceScribe AI vs Otter.ai — which transcription app is better in 2026? We compare accuracy, features, pricing, and real-world performance in this detailed review.',
    intro:
      'VoiceScribe AI and Otter.ai are two of the most popular AI transcription apps on the market. Both promise accurate speech-to-text conversion, but they differ in pricing, features, and target audience. This comparison helps you decide which transcription tool deserves a spot on your phone.',
    toolA: {
      name: 'VoiceScribe AI',
      slug: 'voicescribe',
      description:
        'A mobile-first AI transcription app with real-time transcription, speaker identification, and multi-format export.',
      pros: [
        'Clean, intuitive mobile interface',
        'Accurate AI transcription engine',
        'Speaker identification built in',
        'Multiple export formats',
        'Generous free tier',
        'Fast real-time transcription',
      ],
      cons: [
        'Smaller user base than Otter',
        'Fewer integrations with third-party tools',
        'No dedicated web app yet',
      ],
      bestFor: 'Users who want a clean, affordable mobile transcription tool with solid accuracy.',
      url: 'https://voicescribeai.com',
      isOurProduct: true,
      rating: 4.5,
      pricing: 'Free tier + Premium',
    },
    toolB: {
      name: 'Otter.ai',
      slug: 'otter',
      description:
        'A popular AI meeting assistant and transcription service with Zoom/Teams integration and collaborative features.',
      pros: [
        'Deep integrations with Zoom, Teams, and Google Meet',
        'Collaborative transcription features',
        'Large established user base',
        'Web app and mobile app',
        'OtterPilot auto-joins meetings',
      ],
      cons: [
        'Free tier is limited (300 minutes/month)',
        'Premium pricing is expensive ($16.99/month)',
        'Can struggle with accents and background noise',
        'Interface can feel cluttered',
        'Privacy concerns with auto-joining meetings',
      ],
      bestFor: 'Business teams who need meeting transcription with video conferencing integrations.',
      url: 'https://otter.ai',
      isOurProduct: false,
      rating: 4.3,
      pricing: 'Free (limited) / $16.99+/month',
    },
    features: [
      { feature: 'Real-time Transcription', toolA: '✅ Yes', toolB: '✅ Yes' },
      { feature: 'Speaker Identification', toolA: '✅ Yes', toolB: '✅ Yes' },
      { feature: 'Zoom/Teams Integration', toolA: '❌ No', toolB: '✅ Yes (OtterPilot)' },
      { feature: 'Mobile App', toolA: '✅ iOS & Android', toolB: '✅ iOS & Android' },
      { feature: 'Web App', toolA: '🔜 Coming soon', toolB: '✅ Yes' },
      { feature: 'Export Formats', toolA: 'TXT, DOCX, SRT', toolB: 'TXT, DOCX, SRT, PDF' },
      { feature: 'Free Tier Limits', toolA: 'Generous', toolB: '300 min/month' },
      { feature: 'Collaboration', toolA: '⚠️ Basic sharing', toolB: '✅ Team workspaces' },
      { feature: 'Accuracy', toolA: '⭐ Very good', toolB: '⭐ Good' },
      { feature: 'Pricing', toolA: 'Affordable', toolB: '$16.99+/month' },
      { feature: 'Privacy', toolA: '✅ Straightforward', toolB: '⚠️ Auto-join raises concerns' },
      { feature: 'Setup Time', toolA: '~1 minute', toolB: '~5 minutes (with integrations)' },
      { feature: 'Best For', toolA: 'Individuals & students', toolB: 'Business teams' },
    ],
    verdict: 'VoiceScribe AI for affordability and simplicity; Otter for team meeting workflows.',
    verdictDetail:
      'For individual users who need clean, accurate transcription without the bloat, VoiceScribe AI is the better choice. It\'s more affordable, has a generous free tier, and nails the core transcription experience. Otter.ai shines for business teams who need deep video conferencing integrations and collaborative features — but you\'ll pay significantly more for those capabilities. If you\'re a student, freelancer, or solo professional, VoiceScribe AI offers the best value. If you\'re on a business team with heavy Zoom/Teams usage, Otter.ai\'s integrations may justify the premium price.',
    relatedSlugs: ['scribai-vs-voicescribe'],
    relatedBestPages: ['voice-to-text-apps'],
  },
  {
    slug: 'best-ai-tools-for-students',
    title: 'Best AI Tools for Students',
    metaTitle: 'Best AI Tools for Students in 2026 — Complete Comparison',
    metaDescription:
      'Compare the best AI tools for students in 2026. From study aids to writing assistants, we rank and review the top AI-powered tools that help students learn smarter.',
    intro:
      'AI is transforming education, and students who use the right tools have a massive advantage. But with so many AI tools available, which ones are actually worth your time? In this comparison, we pit the top AI student tools against each other across categories — study aids, writing assistants, research tools, and more — to help you build the ultimate student toolkit.',
    toolA: {
      name: 'StudyBuddy',
      slug: 'studybuddy',
      description:
        'An all-in-one AI study tool that generates flashcards, quizzes, summaries, and study plans from any study material.',
      pros: [
        'All-in-one study solution — flashcards, quizzes, summaries, plans',
        'AI generates materials from your actual documents',
        'Saves hours of manual study prep',
        'Adapts to your learning progress',
        'Clean, distraction-free interface',
      ],
      cons: [
        'Focused on study/review — not a writing or research tool',
        'Requires internet for AI features',
        'Premium features behind paywall',
      ],
      bestFor: 'Students who want one tool that handles all their study prep with AI automation.',
      url: 'https://studybuddy.ing',
      isOurProduct: true,
      rating: 4.7,
      pricing: 'Free + Premium',
    },
    toolB: {
      name: 'Notion AI',
      slug: 'notion-ai',
      description:
        'Notion\'s built-in AI assistant that helps with note-taking, writing, brainstorming, and organizing academic work.',
      pros: [
        'Powerful all-in-one workspace for notes and projects',
        'AI writing assistant built directly into your notes',
        'Great for organizing research and coursework',
        'Collaborative features for group projects',
        'Templates for academic workflows',
      ],
      cons: [
        'Not specifically designed for studying or exam prep',
        'AI add-on costs extra ($10/month)',
        'Can be overwhelming for simple study needs',
        'No built-in spaced repetition or quiz features',
        'Learning curve for the Notion system',
      ],
      bestFor: 'Students who want a full productivity workspace with AI writing assistance built in.',
      url: 'https://notion.so',
      isOurProduct: false,
      rating: 4.4,
      pricing: 'Free + AI add-on $10/month',
    },
    features: [
      { feature: 'AI Flashcard Generation', toolA: '✅ Core feature', toolB: '❌ No' },
      { feature: 'AI Quiz Generation', toolA: '✅ Core feature', toolB: '❌ No' },
      { feature: 'AI Writing Assistant', toolA: '⚠️ Summaries only', toolB: '✅ Full writing AI' },
      { feature: 'Note-Taking', toolA: '⚠️ Basic', toolB: '✅ Advanced' },
      { feature: 'Document Import', toolA: '✅ PDF, notes', toolB: '✅ Multiple formats' },
      { feature: 'Spaced Repetition', toolA: '✅ Built in', toolB: '❌ No' },
      { feature: 'Study Plans', toolA: '✅ AI-generated', toolB: '❌ Manual only' },
      { feature: 'Collaboration', toolA: '⚠️ Basic', toolB: '✅ Team workspaces' },
      { feature: 'Best For', toolA: 'Active studying & review', toolB: 'Note-taking & writing' },
      { feature: 'Pricing', toolA: 'Free + Premium', toolB: 'Free + $10/month AI' },
    ],
    verdict: 'StudyBuddy for exam prep and active studying; Notion AI for note-taking and writing.',
    verdictDetail:
      'The best choice depends on what you need most. If your priority is acing exams — and you want AI to generate flashcards, quizzes, and study plans automatically — StudyBuddy is purpose-built for that. If you need a full workspace for organizing notes, writing papers, and managing projects with AI assistance, Notion AI is the more versatile (but more complex) option. Many top students actually use both: Notion AI for organizing coursework and notes, and StudyBuddy for active review and exam prep. That combination covers the full student workflow.',
    relatedSlugs: ['studybuddy-vs-anki'],
    relatedBestPages: ['ai-study-tools'],
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
