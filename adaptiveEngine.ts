import { Question, PracticeAnswer, Difficulty } from '@/types'
import { practiceQuestions } from '@/data/practiceQuestions'

const WINDOW = 5      // recent answers to evaluate
const UP_THRESHOLD = 3   // correct in last WINDOW to increase difficulty
const DOWN_THRESHOLD = 2 // wrong in last WINDOW to decrease difficulty

export function adjustDifficulty(
  history: PracticeAnswer[],
  current: Difficulty
): Difficulty {
  const recent = history.slice(-WINDOW)
  if (recent.length < 2) return current

  const recentCorrect = recent.filter(a => a.correct).length
  const recentWrong = recent.length - recentCorrect

  if (recentCorrect >= UP_THRESHOLD && current !== 'hard') {
    return current === 'easy' ? 'medium' : 'hard'
  }
  if (recentWrong >= DOWN_THRESHOLD && current !== 'easy') {
    return current === 'hard' ? 'medium' : 'easy'
  }
  return current
}

export function selectNextQuestion(
  history: PracticeAnswer[],
  currentDifficulty: Difficulty,
  weakTopics: string[]
): Question {
  const answeredIds = new Set(history.map(a => a.questionId))

  // Questions at current difficulty, not yet answered
  const available = practiceQuestions.filter(
    q => q.difficulty === currentDifficulty && !answeredIds.has(q.id)
  )

  // If we've exhausted current difficulty, fall back to all unanswered
  const pool = available.length > 0
    ? available
    : practiceQuestions.filter(q => !answeredIds.has(q.id))

  // If ALL questions answered, start fresh (cycle)
  if (pool.length === 0) {
    return practiceQuestions[Math.floor(Math.random() * practiceQuestions.length)]
  }

  // Prioritise weak topics (70% weight) vs anything else (30%)
  if (weakTopics.length > 0) {
    const weakPool = pool.filter(q => weakTopics.includes(q.topic))
    if (weakPool.length > 0 && Math.random() < 0.7) {
      return weakPool[Math.floor(Math.random() * weakPool.length)]
    }
  }

  return pool[Math.floor(Math.random() * pool.length)]
}
