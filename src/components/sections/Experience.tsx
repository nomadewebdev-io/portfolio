'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Badge from '../ui/Badge'

const experiences = [
  {
    title: 'Développeur Web Full-Stack Freelance',
    company: 'Indépendant',
    location: 'Dakar & International (Remote)',
    period: '2024 - Présent',
    description: 'Conception et livraison d\'applications web complètes pour des startups et des entreprises locales et internationales. Architecture moderne React/Next.js et Node.js, intégrations d\'APIs de paiement et suivi de projet rigoureux.',
    achievements: [
      'Plus de 10 projets livrés avec succès dans les délais',
      'Taux de satisfaction client supérieur à 95%',
      'Architecture technique modulaire, sécurisée et scalable',
    ],
  },
  {
    title: 'Développeur Web Junior',
    company: 'Startup Locale',
    location: 'Dakar, Sénégal',
    period: '2022 - 2024',
    description: 'Participation active au développement d\'applications web pour des PME locales. Travail collaboratif en équipe agile, revues de code et maintien de la qualité logicielle.',
    achievements: [
      'Contribution directe à 5 applications web en production',
      'Montée en compétence approfondie sur l\'écosystème React et Node.js',
      'Pratique quotidienne des méthodologies Agiles et de Git',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Expérience</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Mon Parcours Professionnel
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Une progression continue axée sur l&apos;impact concret et la rigueur d&apos;exécution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-600/40 to-transparent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-950 transform -translate-x-1/2 mt-6 md:mt-8 shadow-sm shadow-emerald-500/50" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/30">
                    {/* Header */}
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={17} className="text-emerald-400" />
                      <span className="text-sm text-emerald-400 font-semibold">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display mb-1 text-foreground">{exp.title}</h3>
                    <p className="text-slate-300 font-medium text-sm mb-2">{exp.company}</p>

                    <div className={`flex items-center gap-4 text-xs text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-emerald-400" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          {index % 2 === 0 ? (
                            <span className="md:flex md:flex-row-reverse">{achievement}</span>
                          ) : (
                            <span>{achievement}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}