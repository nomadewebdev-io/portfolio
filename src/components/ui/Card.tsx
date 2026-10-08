import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`bg-slate-900/80 border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/95 shadow-lg shadow-black/30 ${className}`}
    >
      {children}
    </motion.div>
  )
}