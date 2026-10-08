'use client'

import { Mail, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function ContactForm() {
  return (
    <div className="text-center py-6 px-2 flex flex-col items-center justify-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
        <Mail size={32} />
      </div>

      <div className="space-y-2 max-w-sm">
        <h3 className="text-2xl font-bold font-display text-foreground">
          Envoyer un message
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pour toute demande de collaboration ou question, écrivez-moi directement par email.
        </p>
      </div>

      <a
        href="mailto:nomadewebdev@gmail.com?subject=Contact%20-%20Projet%20Web"
        className="w-full sm:w-auto"
      >
        <Button variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px]">
          <span className="flex items-center gap-2">
            <Mail size={18} />
            <span>Me contacter par email</span>
            <ArrowRight size={18} />
          </span>
        </Button>
      </a>

      <p className="text-xs text-slate-400 font-mono">
        nomadewebdev@gmail.com
      </p>
    </div>
  )
}