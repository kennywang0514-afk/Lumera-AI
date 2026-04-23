'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppStore } from '@/store/useAppStore'

const navLinks = [
  { href: '/subjects', label: 'Subjects' },
  { href: '/practice', label: 'Practice' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Nav() {
  const pathname = usePathname()
  const diagnosticCompleted = useAppStore(s => s.diagnosticCompleted)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-brand-accent font-display text-xl font-semibold tracking-wide">
            Lumera
          </span>
          <span className="text-brand-textMuted text-sm font-body font-light tracking-widest uppercase">
            AI
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map(link => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            const disabled =
              !diagnosticCompleted && (link.href === '/practice' || link.href === '/dashboard')

            if (disabled) {
              return (
                <span
                  key={link.href}
                  className="px-3 py-1.5 text-sm text-brand-textDim cursor-not-allowed rounded-md"
                >
                  {link.label}
                </span>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active
                    ? 'text-brand-accent bg-brand-accent/10'
                    : 'text-brand-textMuted hover:text-brand-text hover:bg-brand-surface2'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
