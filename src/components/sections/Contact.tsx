'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MessageCircle, Phone, MapPin, Wallet } from 'lucide-react'
import Badge from '../ui/Badge'
import ContactForm from '../ui/ContactForm'

const socialLinks = [
  { icon: Github, href: 'https://github.com/nomadewebdev-io', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mamadou-diallo-diallo-b9542a', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/dialloemdd', label: 'Twitter' },
  { icon: Mail, href: 'mailto:nomade.webdev@gmail.com', label: 'Email' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Concrétisons Votre Projet
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Une idée d&apos;application, une refonte ou un besoin technique ? Échangeons directement sur vos objectifs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-display mb-3 text-foreground">
                Discutons de vos besoins
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Basé à Dakar et disponible pour des missions au Sénégal et à l&apos;international. Je réponds sous 24h avec une estimation claire et des propositions concrètes.
              </p>
            </div>

            {/* Direct contact channels */}
            <div className="space-y-3">
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/221770000000?text=Bonjour%20Mamadou,%20je%20souhaite%20échanger%20sur%20un%20projet%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-500 hover:bg-slate-900 transition-all group shadow-md shadow-emerald-950/20"
              >
                <div className="p-3 rounded-xl bg-emerald-600 text-white flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Recommandé</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    Échanger directement sur WhatsApp
                  </p>
                  <p className="text-xs text-muted-foreground">Réponse rapide garantie</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:nomade.webdev@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-800 text-emerald-400 border border-white/10 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email professionnel</p>
                  <p className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors text-sm sm:text-base">
                    nomade.webdev@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone call */}
              <a
                href="tel:+221770000000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-800 text-emerald-400 border border-white/10 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Appel téléphonique direct</p>
                  <p className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors text-sm sm:text-base">
                    +221 77 000 00 00 (Dakar)
                  </p>
                </div>
              </a>
            </div>

            {/* Payment methods note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-3">
              <Wallet size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-foreground block mb-0.5">Moyens de paiement acceptés :</span>
                Wave, Orange Money, Free Money, virement bancaire local & international (facturation en Franc CFA / FCFA).
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Réseaux Professionnels
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl shadow-black/40"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}