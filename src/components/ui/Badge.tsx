import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-slate-800 text-slate-200 border border-white/10',
    primary: 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30',
    outline: 'border border-white/15 text-slate-300 bg-white/[0.03]',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}