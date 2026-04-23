import { Difficulty } from '@/types'

interface QuestionCardProps {
  question: string
  topic: string
  difficulty: Difficulty
  questionNumber?: number
  totalQuestions?: number
}

const difficultyConfig: Record<Difficulty, { label: string; class: string }> = {
  easy: {
    label: 'Foundational',
    class: 'text-brand-success border-brand-success/30 bg-brand-success/8',
  },
  medium: {
    label: 'Intermediate',
    class: 'text-brand-warning border-brand-warning/30 bg-brand-warning/8',
  },
  hard: {
    label: 'Advanced',
    class: 'text-brand-error border-brand-error/30 bg-brand-error/8',
  },
}

export function QuestionCard({
  question,
  topic,
  difficulty,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  const diff = difficultyConfig[difficulty]

  return (
    <div className="mb-6">
      {/* Meta row */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="px-2.5 py-1 text-xs font-medium rounded-md border border-brand-border text-brand-textMuted bg-brand-surface">
          {topic}
        </span>
        <span className={`px-2.5 py-1 text-xs font-medium rounded-md border ${diff.class}`}>
          {diff.label}
        </span>
        {questionNumber !== undefined && totalQuestions !== undefined && (
          <span className="ml-auto text-xs text-brand-textDim font-mono">
            {questionNumber} / {totalQuestions}
          </span>
        )}
      </div>

      {/* Question text */}
      <h2 className="font-display text-2xl leading-snug text-brand-text font-medium">
        {question}
      </h2>
    </div>
  )
}
