'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const highlights = [
  {
    icon: Code2,
    title: 'Code propre',
    description: 'Architecture maintenable et scalable',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle ambient glow behind card */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/15 via-emerald-800/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Main portrait frame */}
              <div className="relative rounded-3xl p-3 bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/profile.png"
                    alt="Mamadou Diallo"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-[50%_20%] transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  {/* Subtle bottom gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Badges on photo */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white/90 text-xs shadow-md">
                      <MapPin size={13} className="text-emerald-400" />
                      Dakar, Sénégal
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="flex items-center gap-1.5 bg-emerald-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/40 text-emerald-300 text-xs font-medium shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Freelance dispo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                <span>Développeur autodidacte, depuis 2023</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground">
                Je suis Mamadou Diallo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Développeur autodidacte depuis 2023 et développeur web full-stack indépendant basé à Dakar.
                Je conçois des applications modernes et performantes en accompagnant les startups, PME et porteurs
                de projet dans la réalisation de leurs solutions digitales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon approche privilégie la clarté du code, l&apos;expérience utilisateur, la communication transparente
                et le respect rigoureux des délais. Chaque projet est conçu sur-mesure pour créer un réel impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/30 transition-colors"
                >
                  <item.icon className="w-7 h-7 text-emerald-400 mb-3" />
                  <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}