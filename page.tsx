'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Nav from '@/components/layout/Nav'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAppStore } from '@/store/useAppStore'
import { TopicPerformance } from '@/types'

const difficultyLabel: Record<string, string> = {
  easy: 'Foundational',
  medium: 'Intermediate',
  hard: 'Advanced',
}

const difficultyColor: Record<string, string> = {
  easy: '#4DAA84',
  medium: '#D99A40',
  hard: '#CC6B67',
}

export default function DashboardPage() {
  const router = useRouter()
  const {
    diagnosticCompleted,
    diagnosticResult,
    practiceHistory,
    currentDifficulty,
  } = useAppStore()

  useEffect(() => {
    if (!diagnosticCompleted) router.replace('/diagnostic')
  }, [diagnosticCompleted, router])

  if (!diagnosticResult) return null

  // ── Compute combined topic performance ──────────────────────────────────────
  const topicMap: Record<string, { correct: number; total: number }> = {}

  // Seed with diagnostic data
  diagnosticResult.topicPerformance.forEach(tp => {
    topicMap[tp.topic] = { correct: tp.correct, total: tp.total }
  })

  // Merge practice data
  practiceHistory.forEach(a => {
    if (!topicMap[a.topic]) topicMap[a.topic] = { correct: 0, total: 0 }
    topicMap[a.topic].total++
    if (a.correct) topicMap[a.topic].correct++
  })

  const topicPerformance: TopicPerformance[] = Object.entries(topicMap).map(([topic, s]) => ({
    topic,
    correct: s.correct,
    total: s.total,
    accuracy: s.total > 0 ? s.correct / s.total : 0,
  })).sort((a, b) => b.total - a.total)

  // ── Summary stats ────────────────────────────────────────────────────────────
  const diagAnswered = diagnosticResult.totalQuestions
  const practiceAnswered = practiceHistory.length
  const totalAnswered = diagAnswered + practiceAnswered

  const diagCorrect = diagnosticResult.score
  const practiceCorrect = practiceHistory.filter(a => a.correct).length
  const totalCorrect = diagCorrect + practiceCorrect
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  const practiceAccuracy =
    practiceAnswered > 0 ? Math.round((practiceCorrect / practiceAnswered) * 100) : null

  // Streak: current consecutive correct answers
  let streak = 0
  for (let i = practiceHistory.length - 1; i >= 0; i--) {
    if (practiceHistory[i].correct) streak++
    else break
  }

  const stats = [
    { label: 'Questions Answered', value: totalAnswered.toString(), sub: `${diagAnswered} diagnostic, ${practiceAnswered} practice` },
    { label: 'Overall Accuracy', value: `${overallAccuracy}%`, sub: practiceAccuracy !== null ? `${practiceAccuracy}% in practice` : 'From diagnostic only' },
    { label: 'Current Level', value: difficultyLabel[currentDifficulty], sub: 'Adapts with performance' },
    { label: 'Correct Streak', value: streak.toString(), sub: streak > 0 ? 'Keep going' : 'Start a streak in practice' },
  ]

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-brand-bg pt-14">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-20">
          {/* Header */}
          <div className="flex items-start justify-between mb-10 animate-fade-in">
            <div>
              <p className="text-brand-textDim text-xs font-mono uppercase tracking-wider mb-2">
                Mathematics — JAMB
              </p>
              <h1 className="font-display text-4xl font-semibold text-brand-text">
                Progress Dashboard
              </h1>
            </div>
            <Link href="/practice">
              <Button size="md">Continue Practice</Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <Card
                key={stat.label}
                padding="md"
                className="animate-slide-up"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' } as React.CSSProperties}
              >
                <p className="text-brand-textDim text-xs font-medium uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="font-display text-3xl font-semibold text-brand-text mb-1">
                  {stat.value}
                </p>
                <p className="text-brand-textDim text-xs leading-snug">{stat.sub}</p>
              </Card>
            ))}
          </div>

          {/* Topic performance */}
          <Card
            padding="lg"
            className="animate-slide-up mb-8"
            style={{ animationDelay: '240ms', animationFillMode: 'both' } as React.CSSProperties}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-semibold text-brand-text">
                Topic Performance
              </h2>
              <span className="text-xs text-brand-textDim font-mono">Diagnostic + Practice</span>
            </div>

            {topicPerformance.length === 0 ? (
              <p className="text-brand-textDim text-sm">Complete the diagnostic to see topic data.</p>
            ) : (
              <div className="space-y-5">
                {topicPerformance.map((tp, i) => {
                  const pct = Math.round(tp.accuracy * 100)
                  const barColor =
                    pct >= 70 ? '#4DAA84' : pct >= 50 ? '#D99A40' : '#CC6B67'
                  return (
                    <div
                      key={tp.topic}
                      className="animate-slide-up"
                      style={{ animationDelay: `${i * 40 + 260}ms`, animationFillMode: 'both' } as React.CSSProperties}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-brand-text">{tp.topic}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-brand-textMuted font-mono">
                            {tp.correct}/{tp.total} correct
                          </span>
                          <span
                            className="text-xs font-mono font-semibold"
                            style={{ color: barColor }}
                          >
                            {pct}%
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 rounded-full bg-brand-border overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, background: barColor }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Card>

          {/* Diagnostic snapshot */}
          <Card
            padding="md"
            className="border-brand-accent/20 animate-slide-up"
            style={{ animationDelay: '400ms', animationFillMode: 'both' } as React.CSSProperties}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs text-brand-accent font-medium uppercase tracking-wider">
                Diagnostic Score
              </span>
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              <div>
                <span className="font-display text-5xl font-semibold text-brand-text">
                  {diagnosticResult.score}
                </span>
                <span className="font-display text-2xl text-brand-textMuted ml-2">
                  / {diagnosticResult.totalQuestions}
                </span>
              </div>
              <div className="pb-1">
                <p className="text-brand-textMuted text-sm">
                  Starting level:{' '}
                  <span style={{ color: difficultyColor[diagnosticResult.recommendedDifficulty] }}>
                    {difficultyLabel[diagnosticResult.recommendedDifficulty]}
                  </span>
                </p>
                {diagnosticResult.weakTopics.length > 0 && (
                  <p className="text-brand-textDim text-xs mt-0.5">
                    Focus areas: {diagnosticResult.weakTopics.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  )
}
