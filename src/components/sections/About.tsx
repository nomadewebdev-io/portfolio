'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, Code2, Users, Sparkles } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const highlights = [
  {
    icon: Code2,
    title: 'Code propre',
    description: 'Architecture maintenable et escalable',
  },
  {
    icon: Sparkles,
    title: 'Performant',
    description: 'Optimisation pour une expérience fluide',
  },
  {
    icon: Users,
    title: 'Collaboratif',
    description: 'Communication claire et régulière',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">À propos</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Qui suis-je ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le développement web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full bg-background overflow-hidden">
                {/* Profile photo */}
                <Image
                  src="/profile.jpg"
                  alt="Mamadou Diallo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2"
            >
              <span className="text-sm">Freelance disponible</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2"
            >
              <span className="text-sm">+2 ans d&apos;expérience</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground/90">
                <span className="text-2xl">👋</span> Salut, je suis <strong>Mamadou Diallo</strong>.
              </p>
              <p className="text-muted-foreground">
                Développeur web full-stack freelance, passionné par la création d&apos;applications
                modernes et performantes. Je travail avec des startups, des PME et des entrepreneurs
                pour transformer leurs idées en produits digitaux fonctionnels.
              </p>
              <p className="text-muted-foreground">
                Mon approche privilégie la qualité du code, la communication transparente
                et le respect des délais. Chaque projet est une opportunité de créer quelque
                chose de significatif.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <item.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="secondary">
                <span className="flex items-center gap-2">
                  <FileText size={20} />
                  Télécharger mon CV
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}