'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, MessageCircle } from 'lucide-react'

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/221770000000', label: 'WhatsApp' },
  { icon: Github, href: 'https://github.com/nomadewebdev-io', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mamadou-diallo-diallo-b9542a', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/dialloemdd', label: 'Twitter' },
  { icon: Mail, href: 'mailto:nomade.webdev@gmail.com', label: 'Email' },
]

const footerLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="inline-block">
              <span className="text-2xl font-bold gradient-text font-display">
                Mamadou Diallo
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur Web Full-Stack freelance basé à Dakar. Création d&apos;applications performantes, intuitives et adaptées aux réalités du marché.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-400 transition-colors text-sm py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Échangeons</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Mamadou Diallo. Tous droits réservés.
            </p>
            <p>
              Conçu et développé à Dakar, Sénégal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}