'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Badge from '../ui/Badge'

const experiences = [
  {
    title: 'Développeur Web Full-Stack Freelance',
    company: 'Indépendant',
    location: 'Remote',
    period: '2024 - Présent',
    description: 'Développement d\'applications web complètes pour des clients variés. Spécialisation dans les projets React/Next.js et Node.js. Gestion complète des projets de l\'idéation à la mise en production.',
    achievements: [
      'Plus de 10 projets delivered avec succès',
      'Taux de satisfaction client de 95%',
      'Stack technique moderne et scalabre',
    ],
  },
  {
    title: 'Développeur Web Junior',
    company: 'Startup Locale',
    location: 'Dakar, Sénégal',
    period: '2022 - 2024',
    description: 'Participation au développement d\'applications web pour des PME locales. Collaboration avec une équipe de 5 développeurs. Premiers pas dans le développement professionnel.',
    achievements: [
      'Contribution à 5 projets majeurs',
      'Montée en compétence rapide sur React et Node.js',
      'Travail en méthodologie Agile/Scrum',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-white/5">
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Mon Parcours
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un parcours en évolution constante
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform md:-translate-x-1/2" />

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
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-x-1/2 mt-6 md:mt-8" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    {/* Header */}
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={18} className="text-indigo-400" />
                      <span className="text-sm text-indigo-400 font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>

                    <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
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