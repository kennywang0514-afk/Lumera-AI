'use client'

import { cn } from '@/utils/cn'

type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'reveal'

interface AnswerOptionProps {
  label: string
  text: string
  state: OptionState
  onClick?: () => void
  disabled?: boolean
}

export function AnswerOption({ label, text, state, onClick, disabled }: AnswerOptionProps) {
  const base =
    'w-full text-left flex items-start gap-4 px-5 py-4 rounded-xl border transition-all duration-200 cursor-pointer group'

  const stateStyles: Record<OptionState, string> = {
    idle:
      'border-brand-border bg-brand-surface2 hover:border-brand-borderLight hover:bg-brand-surface text-brand-text',
    selected:
      'border-brand-accent bg-brand-accent/8 text-brand-text',
    correct:
      'border-brand-success bg-brand-success/10 text-brand-success',
    wrong:
      'border-brand-error bg-brand-error/10 text-brand-error',
    reveal:
      'border-brand-success/50 bg-brand-success/6 text-brand-success/80',
  }

  const labelStyles: Record<OptionState, string> = {
    idle: 'bg-brand-surface border-brand-border text-brand-textMuted group-hover:border-brand-accent/40 group-hover:text-brand-accent',
    selected: 'bg-brand-accent/15 border-brand-accent text-brand-accent',
    correct: 'bg-brand-success/15 border-brand-success text-brand-success',
    wrong: 'bg-brand-error/15 border-brand-error text-brand-error',
    reveal: 'bg-brand-success/10 border-brand-success/40 text-brand-success/70',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || state === 'correct' || state === 'wrong' || state === 'reveal'}
      className={cn(base, stateStyles[state], disabled && 'cursor-not-allowed opacity-70')}
    >
      <span
        className={cn(
          'flex-none w-7 h-7 rounded-md border text-xs font-mono font-medium flex items-center justify-center transition-all duration-200 mt-0.5',
          labelStyles[state]
        )}
      >
        {label}
      </span>
      <span className="font-body text-[15px] leading-relaxed pt-0.5">{text}</span>
    </button>
  )
}
