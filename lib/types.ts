export interface LearningPack {
  id: string
  title: string
  subject: string
  description: string
  language: "en" | "hi" | "pa"
  version: string
  size: string
  downloadUrl?: string
  isDownloaded: boolean
  progress: number
  content: {
    text?: string
    audioUrl?: string
    videoUrl?: string
    duration?: number
  }
  createdAt: string
  updatedAt: string
}

export interface Quiz {
  id: string
  title: string
  subject: string
  questions: QuizQuestion[]
  timeLimit?: number
  attempts: number
  bestScore: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface StudentProgress {
  userId: string
  packId: string
  progress: number
  timeSpent: number
  lastAccessed: string
  completed: boolean
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earned: boolean
  earnedAt?: string
}

export interface Assignment {
  id: string
  title: string
  subject: string
  description: string
  dueDate: string
  status: "pending" | "submitted" | "graded"
  score?: number
}

export interface TimetableEntry {
  id: string
  subject: string
  time: string
  duration: number
  teacher: string
  room?: string
  day: string
}
