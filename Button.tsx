import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/40 disabled:opacity-40 disabled:cursor-not-allowed select-none'

    const variants = {
      primary:
        'bg-brand-accent text-brand-bg hover:bg-brand-accentLight active:scale-[0.98] shadow-lg shadow-brand-accent/10',
      ghost:
        'border border-brand-border text-brand-textMuted hover:border-brand-borderLight hover:text-brand-text active:scale-[0.98]',
      danger:
        'border border-brand-error/40 text-brand-error hover:bg-brand-error/10 active:scale-[0.98]',
    }

    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base px-7 py-3.5',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
