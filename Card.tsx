import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const base = 'rounded-xl border'

    const variants = {
      default: 'bg-brand-surface2 border-brand-border',
      elevated: 'bg-brand-surface2 border-brand-borderLight shadow-2xl shadow-black/30',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div ref={ref} className={cn(base, variants[variant], paddings[padding], className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
