'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import Button from '../ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-200">
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-foreground placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm min-h-[44px]"
            placeholder="Ex: Amadou Sow"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-200">
            Votre adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-foreground placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm min-h-[44px]"
            placeholder="amadou@entreprise.sn"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-200">
          Objet du projet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-foreground placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm min-h-[44px]"
          placeholder="Ex: Création de site e-commerce avec paiement Wave"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-200">
          Détails de votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-foreground placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none text-sm"
          placeholder="Décrivez brièvement les objectifs, délais et fonctionnalités attendues..."
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full min-h-[48px]"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Envoi en cours...
            </span>
          ) : isSubmitted ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle size={18} />
              Message envoyé avec succès !
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send size={18} />
              Transmettre ma demande
            </span>
          )}
        </Button>
      </motion.div>
    </form>
  )
}