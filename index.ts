export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Explanation {
  directSolution: string
  conceptExplanation: string
  methodToRemember: string
  commonMistake: string
}

export interface Question {
  id: string
  topic: string
  difficulty: Difficulty
  question: string
  options: string[]
  correctIndex: number
  explanation: Explanation
}

export interface TopicPerformance {
  topic: string
  correct: number
  total: number
  accuracy: number
}

export interface DiagnosticResult {
  score: number
  totalQuestions: number
  topicPerformance: TopicPerformance[]
  strongTopics: string[]
  weakTopics: string[]
  recommendedDifficulty: Difficulty
}

export interface PracticeAnswer {
  questionId: string
  selectedIndex: number
  correct: boolean
  topic: string
  difficulty: Difficulty
  timestamp: number
}
