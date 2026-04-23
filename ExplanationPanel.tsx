import { Explanation } from '@/types'

interface ExplanationPanelProps {
  explanation: Explanation
  wasCorrect: boolean
}

const sections = [
  {
    key: 'directSolution' as keyof Explanation,
    label: 'Solution',
    icon: '01',
    accent: 'text-brand-accent border-brand-accent/30 bg-brand-accent/5',
    labelColor: 'text-brand-accent',
  },
  {
    key: 'conceptExplanation' as keyof Explanation,
    label: 'The Concept',
    icon: '02',
    accent: 'text-brand-text border-brand-borderLight bg-brand-surface',
    labelColor: 'text-brand-textMuted',
  },
  {
    key: 'methodToRemember' as keyof Explanation,
    label: 'Method to Remember',
    icon: '03',
    accent: 'text-brand-text border-brand-borderLight bg-brand-surface',
    labelColor: 'text-brand-textMuted',
  },
  {
    key: 'commonMistake' as keyof Explanation,
    label: 'Common Mistake',
    icon: '04',
    accent: 'text-brand-error border-brand-error/25 bg-brand-error/5',
    labelColor: 'text-brand-error',
  },
]

export function ExplanationPanel({ explanation, wasCorrect }: ExplanationPanelProps) {
  return (
    <div className="animate-slide-up mt-6">
      {/* Result header */}
      <div
        className={`mb-5 flex items-center gap-3 px-5 py-3.5 rounded-xl border ${
          wasCorrect
            ? 'border-brand-success/30 bg-brand-success/8 text-brand-success'
            : 'border-brand-error/30 bg-brand-error/8 text-brand-error'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center flex-none ${
            wasCorrect ? 'bg-brand-success' : 'bg-brand-error'
          }`}
        >
          {wasCorrect ? (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path d="M1 4L4 7L10 1" stroke="#0B0D17" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M1 1L8 8M8 1L1 8" stroke="#0B0D17" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        <span className="text-sm font-medium">
          {wasCorrect ? 'Correct answer' : 'Incorrect — review the explanation below'}
        </span>
      </div>

      {/* Explanation sections */}
      <div className="space-y-3">
        {sections.map((section, i) => (
          <div
            key={section.key}
            className={`rounded-xl border px-5 py-4 animate-slide-up ${section.accent}`}
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className={`text-[10px] font-mono font-medium ${section.labelColor} opacity-60`}>
                {section.icon}
              </span>
              <span className={`text-xs font-medium uppercase tracking-wider ${section.labelColor}`}>
                {section.label}
              </span>
            </div>
            <p className="text-brand-text text-[15px] leading-relaxed font-body">
              {explanation[section.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
