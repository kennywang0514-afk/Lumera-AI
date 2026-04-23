interface ProgressBarProps {
  value: number     // 0–100
  label?: string
  showLabel?: boolean
}

export function ProgressBar({ value, label, showLabel = true }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-brand-textMuted font-medium">{label}</span>
          <span className="text-xs text-brand-textMuted font-mono">{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
