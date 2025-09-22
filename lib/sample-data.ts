import type { LearningPack, Quiz, Badge, Assignment, TimetableEntry } from "./types"

export const sampleLearningPacks: LearningPack[] = [
  {
    id: "1",
    title: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ (Punjabi Alphabet)",
    subject: "Language",
    description: "Learn the Punjabi alphabet with audio pronunciation",
    language: "pa",
    version: "1.0",
    size: "2.5 MB",
    isDownloaded: true,
    progress: 75,
    content: {
      text: `ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ

ਪੰਜਾਬੀ ਵਿੱਚ 35 ਅੱਖਰ ਹਨ:

ਸ ਹ ਕ ਖ ਗ ਘ ਙ
ਚ ਛ ਜ ਝ ਞ
ਟ ਠ ਡ ਢ ਣ
ਤ ਥ ਦ ਧ ਨ
ਪ ਫ ਬ ਭ ਮ
ਯ ਰ ਲ ਵ ਸ਼
ਖ਼ ਗ਼ ਜ਼ ਫ਼

ਸਵਰ (Vowels):
ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ

ਹਰ ਅੱਖਰ ਦੀ ਆਵਾਜ਼ ਸੁਣੋ ਅਤੇ ਦੁਹਰਾਓ।`,
      audioUrl: "/audio/punjabi-alphabet.mp3",
      duration: 180,
    },
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "गणित के मूल सिद्धांत (Basic Math Principles)",
    subject: "Mathematics",
    description: "Basic mathematical concepts in Hindi",
    language: "hi",
    version: "1.2",
    size: "3.1 MB",
    isDownloaded: false,
    progress: 0,
    content: {
      text: `गणित के मूल सिद्धांत

जोड़ना (Addition):
2 + 3 = 5
5 + 4 = 9
10 + 15 = 25

घटाना (Subtraction):
10 - 3 = 7
15 - 8 = 7
20 - 12 = 8

गुणा (Multiplication):
2 × 3 = 6
4 × 5 = 20
7 × 8 = 56

भाग (Division):
10 ÷ 2 = 5
15 ÷ 3 = 5
24 ÷ 6 = 4

अभ्यास करें और सीखें!`,
      audioUrl: "/audio/hindi-math.mp3",
      videoUrl: "/video/math-demo.mp4",
      duration: 240,
    },
    createdAt: "2024-01-10",
    updatedAt: "2024-01-20",
  },
  {
    id: "3",
    title: "English Grammar Basics",
    subject: "English",
    description: "Fundamental English grammar rules and examples",
    language: "en",
    version: "2.0",
    size: "4.2 MB",
    isDownloaded: true,
    progress: 45,
    content: {
      text: `English Grammar Basics

Parts of Speech:
1. Noun - Names of people, places, things
   Examples: book, school, teacher, Delhi

2. Verb - Action words
   Examples: run, jump, read, write

3. Adjective - Describing words
   Examples: big, small, beautiful, smart

4. Pronoun - Replace nouns
   Examples: he, she, it, they

5. Adverb - Describe verbs
   Examples: quickly, slowly, carefully

Simple Sentences:
- Subject + Verb + Object
- "I read books."
- "She plays cricket."
- "They study hard."

Practice makes perfect!`,
      audioUrl: "/audio/english-grammar.mp3",
      duration: 300,
    },
    createdAt: "2024-01-05",
    updatedAt: "2024-01-25",
  },
]

export const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    title: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਟੈਸਟ",
    subject: "Language",
    attempts: 2,
    bestScore: 80,
    questions: [
      {
        id: "1",
        question: "ਪੰਜਾਬੀ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 1,
        explanation: "ਪੰਜਾਬੀ ਵਿੱਚ 35 ਅੱਖਰ ਹਨ।",
      },
      {
        id: "2",
        question: "ਪਹਿਲਾ ਅੱਖਰ ਕਿਹੜਾ ਹੈ?",
        options: ["ਅ", "ਸ", "ਕ", "ਹ"],
        correctAnswer: 1,
        explanation: 'ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਦਾ ਪਹਿਲਾ ਅੱਖਰ "ਸ" ਹੈ।',
      },
    ],
  },
  {
    id: "2",
    title: "Basic Math Quiz",
    subject: "Mathematics",
    attempts: 1,
    bestScore: 90,
    questions: [
      {
        id: "1",
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        explanation: "5 + 3 = 8",
      },
      {
        id: "2",
        question: "What is 10 - 4?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
        explanation: "10 - 4 = 6",
      },
    ],
  },
]

export const sampleBadges: Badge[] = [
  {
    id: "1",
    name: "First Lesson",
    description: "Complete your first lesson",
    icon: "🎯",
    earned: true,
    earnedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Quiz Master",
    description: "Score 90% or higher on a quiz",
    icon: "🏆",
    earned: true,
    earnedAt: "2024-01-18",
  },
  {
    id: "3",
    name: "Week Streak",
    description: "Study for 7 consecutive days",
    icon: "🔥",
    earned: false,
  },
  {
    id: "4",
    name: "Digital Explorer",
    description: "Complete digital literacy course",
    icon: "💻",
    earned: false,
  },
]

export const sampleAssignments: Assignment[] = [
  {
    id: "1",
    title: "ਪੰਜਾਬੀ ਲਿਖਤ ਅਭਿਆਸ",
    subject: "Language",
    description: "Write 10 sentences in Punjabi using new vocabulary",
    dueDate: "2024-02-15",
    status: "pending",
  },
  {
    id: "2",
    title: "Math Problem Set 1",
    subject: "Mathematics",
    description: "Solve addition and subtraction problems",
    dueDate: "2024-02-10",
    status: "submitted",
    score: 85,
  },
  {
    id: "3",
    title: "English Essay",
    subject: "English",
    description: "Write a short essay about your village",
    dueDate: "2024-02-20",
    status: "graded",
    score: 92,
  },
]

export const sampleTimetable: TimetableEntry[] = [
  {
    id: "1",
    subject: "ਪੰਜਾਬੀ",
    time: "09:00",
    duration: 45,
    teacher: "ਗੁਰੂ ਜੀ",
    room: "Room 1",
    day: "Monday",
  },
  {
    id: "2",
    subject: "गणित",
    time: "10:00",
    duration: 45,
    teacher: "राम शर्मा",
    room: "Room 2",
    day: "Monday",
  },
  {
    id: "3",
    subject: "English",
    time: "11:15",
    duration: 45,
    teacher: "Ms. Preet",
    room: "Room 1",
    day: "Monday",
  },
  {
    id: "4",
    subject: "Digital Literacy",
    time: "14:00",
    duration: 60,
    teacher: "Tech Teacher",
    room: "Computer Lab",
    day: "Monday",
  },
]
