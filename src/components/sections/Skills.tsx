'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, Layers, CheckCircle2 } from 'lucide-react'
import Badge from '../ui/Badge'

const bentoSkills = [
  {
    title: 'Frontend & Architecture d\'Interface',
    subtitle: 'Création d\'expériences web réactives et fluides',
    icon: Code2,
    colSpan: 'md:col-span-2',
    accent: 'border-emerald-500/20 bg-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    capabilities: [
      'Next.js (App Router) & React',
      'TypeScript pour un code typé et structuré',
      'Tailwind CSS pour des interfaces soignées et adaptatives',
      'Intégration HTML5/CSS3 responsive et accessible',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Services Node.js et intégration d\'APIs',
    icon: Server,
    colSpan: 'md:col-span-1',
    accent: 'border-white/10 bg-slate-900/80',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    capabilities: [
      'Node.js & Express pour la création d\'APIs REST',
      'Proxy d\'API, contrôle de requêtes et sécurité serveur',
      'Consommation et intégration de services tiers (REST)',
    ],
    tags: ['Node.js', 'Express', 'API REST', 'TypeScript'],
  },
  {
    title: 'Bases de Données & Stockage',
    subtitle: 'Gestion relationnelle et persistance locale',
    icon: Database,
    colSpan: 'md:col-span-1',
    accent: 'border-white/10 bg-slate-900/80',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    capabilities: [
      'PostgreSQL & modélisation relationnelle (Supabase, client pg)',
      'Sécurisation des accès aux données via Row Level Security (RLS)',
      'Persistance locale (localStorage, fichiers de données JSON)',
    ],
    tags: ['PostgreSQL', 'Supabase', 'SQL', 'LocalStorage'],
  },
  {
    title: 'Déploiement & Outils',
    subtitle: 'Mise en production et gestion de versions',
    icon: Layers,
    colSpan: 'md:col-span-2',
    accent: 'border-emerald-500/20 bg-slate-900/90',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    capabilities: [
      'Gestion de versions et collaboration avec Git & GitHub',
      'Hébergement et déploiement continu sur Netlify & Vercel',
      'Outillage frontend et environnements de build (Vite, npm)',
    ],
    tags: ['Git', 'GitHub', 'Netlify', 'Vercel', 'Vite', 'npm'],
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
            Technologies et outils mis en pratique à travers mes différents projets.
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