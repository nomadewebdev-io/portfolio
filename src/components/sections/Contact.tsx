'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react'
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez une idée ? Un projet ? N&apos;hésitez pas à me contacter, je vous répondrai dans les 24 heures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Restons en contact</h3>
              <p className="text-muted-foreground">
                Je suis actuellement disponible pour des missions freelance.
                N&apos;hesitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>

            {/* Direct contact */}
            <div className="space-y-4">
              <a
                href="mailto:nomade.webdev@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-indigo-400 transition-colors">
                    nomade.webdev@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-4">Retrouvez-moi sur</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400">Disponible pour de nouveaux projets</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}