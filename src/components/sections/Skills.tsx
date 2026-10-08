'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, Layers, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react'
import Badge from '../ui/Badge'

const bentoSkills = [
  {
    title: 'Frontend & Architecture d\'Interface',
    subtitle: 'Création d\'expériences web véloces et intuitives',
    icon: Code2,
    colSpan: 'md:col-span-2',
    accent: 'border-emerald-500/20 bg-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    capabilities: [
      'Next.js 14 (App Router) & React 18',
      'TypeScript pour un code typé et sans régression',
      'Tailwind CSS, animations fluides (Framer Motion)',
      'Optimisation des Core Web Vitals et SEO technique',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'],
  },
  {
    title: 'Backend & APIs Scalables',
    subtitle: 'Services fiables et sécurisés',
    icon: Server,
    colSpan: 'md:col-span-1',
    accent: 'border-white/10 bg-slate-900/80',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    capabilities: [
      'Node.js & Express pour APIs RESTful performantes',
      'Authentification sécurisée (JWT, sessions, OAuth)',
      'Architecture modulaire orientée services',
    ],
    tags: ['Node.js', 'Express', 'API REST', 'GraphQL', 'JWT'],
  },
  {
    title: 'Bases de Données & Stockage',
    subtitle: 'Gestion robuste et intégrité des données',
    icon: Database,
    colSpan: 'md:col-span-1',
    accent: 'border-white/10 bg-slate-900/80',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    capabilities: [
      'PostgreSQL & modélisation relationnelle',
      'Prisma ORM pour des requêtes sécurisées',
      'MongoDB & gestion de documents flexibles',
      'Mise en cache rapide avec Redis',
    ],
    tags: ['PostgreSQL', 'Prisma', 'MongoDB', 'Redis', 'SQL'],
  },
  {
    title: 'DevOps & Intégrations Métier',
    subtitle: 'Déploiement continu et paiements ouest-africains',
    icon: Layers,
    colSpan: 'md:col-span-2',
    accent: 'border-emerald-500/20 bg-slate-900/90',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    capabilities: [
      'Intégration d\'APIs de paiement mobile : Wave, Orange Money, Free Money',
      'Conteneurisation avec Docker & gestion des environnements',
      'Pipelines CI/CD automatisés et déploiement Vercel / Netlify',
      'Collaboration d\'équipe sous Git & revues de code rigoureuses',
    ],
    tags: ['Wave API', 'Orange Money API', 'Docker', 'Git / GitHub', 'CI/CD', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Compétences</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Stack Technique & Savoir-Faire
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Une expertise full-stack complète pour concevoir, déployer et maintenir des applications web de bout en bout.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bentoSkills.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl border ${item.accent} backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between ${item.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${item.iconBg}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Capabilities list */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}