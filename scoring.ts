import { Question, TopicPerformance, DiagnosticResult, Difficulty } from '@/types'

interface AnswerRecord {
  questionId: string
  selectedIndex: number
}

export function computeDiagnosticResult(
  questions: Question[],
  answers: AnswerRecord[]
): DiagnosticResult {
  const answerMap: Record<string, number> = {}
  answers.forEach(a => { answerMap[a.questionId] = a.selectedIndex })

  let correct = 0
  const topicMap: Record<string, { correct: number; total: number }> = {}

  for (const q of questions) {
    if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 }
    topicMap[q.topic].total++

    const selectedIndex = answerMap[q.id]
    if (selectedIndex === q.correctIndex) {
      correct++
      topicMap[q.topic].correct++
    }
  }

  const topicPerformance: TopicPerformance[] = Object.entries(topicMap).map(
    ([topic, stats]) => ({
      topic,
      correct: stats.correct,
      total: stats.total,
      accuracy: stats.total > 0 ? stats.correct / stats.total : 0,
    })
  )

  const strongTopics = topicPerformance
    .filter(t => t.accuracy >= 0.7)
    .map(t => t.topic)

  const weakTopics = topicPerformance
    .filter(t => t.accuracy < 0.6)
    .map(t => t.topic)

  const overallAccuracy = correct / questions.length
  let recommendedDifficulty: Difficulty
  if (overallAccuracy >= 0.8) recommendedDifficulty = 'hard'
  else if (overallAccuracy >= 0.5) recommendedDifficulty = 'medium'
  else recommendedDifficulty = 'easy'

  return {
    score: correct,
    totalQuestions: questions.length,
    topicPerformance,
    strongTopics,
    weakTopics,
    recommendedDifficulty,
  }
}
