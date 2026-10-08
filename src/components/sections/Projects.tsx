'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ShoppingBag, BarChart3, CloudSun, CheckSquare, Server, Sparkles } from 'lucide-react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

const projects = [
  {
    title: 'Plateforme E-Commerce & Paiements Mobiles',
    featured: true,
    description: 'Solution e-commerce complète pensée pour le commerce en Afrique de l\'Ouest : gestion du panier réactif, tarification en Franc CFA (FCFA), et intégration native des paiements mobiles par Wave et Orange Money avec webhook de confirmation automatique.',
    tags: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Wave API', 'Orange Money', 'FCFA'],
    github: 'https://github.com/nomadewebdev-io',
    demo: '#',
    icon: ShoppingBag,
    comingSoon: false,
    highlight: 'Projet Phare',
  },
  {
    title: 'Dashboard Analytics & Gestion Financière',
    featured: false,
    description: 'Tableau de bord interactif pour entreprises locales : suivi des ventes journalières, reporting de trésorerie en FCFA, et visualisation graphique temps réel des transactions.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/nomadewebdev-io',
    demo: '#',
    icon: BarChart3,
    comingSoon: false,
  },
  {
    title: 'Application Météo Live',
    featured: false,
    description: 'Application de prévisions météorologiques en temps réel avec géolocalisation des villes mondiales et locales, interface fluide et données précises via l\'API OpenWeatherMap.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/nomadewebdev-io/meteo-app',
    demo: 'https://frolicking-griffin-79bb29.netlify.app/',
    icon: CloudSun,
    comingSoon: false,
  },
  {
    title: 'Gestionnaire de Tâches & Productivité',
    featured: false,
    description: 'Application web de productivité personnelle avec persistance locale des données (localStorage), suivi de complétion et ergonomie soignée pour écrans mobiles et ordinateurs.',
    tags: ['HTML5', 'CSS3', 'JavaScript Vanilla', 'LocalStorage'],
    github: 'https://github.com/nomadewebdev-io/application-Todo-list',
    demo: 'https://application-list-de-tache.netlify.app/',
    icon: CheckSquare,
    comingSoon: false,
  },
  {
    title: 'Passerelle API Mobile & Services Backend',
    featured: false,
    description: 'Architecture backend RESTful sécurisée avec authentification JWT, gestion de rôles, téléchargement de documents et documentation Swagger interactive.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Swagger'],
    github: 'https://github.com/nomadewebdev-io',
    demo: '#',
    icon: Server,
    comingSoon: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Projets</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Réalisations & Produits Déployés
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Des applications concrètes, sécurisées et orientées création de valeur commerciale.
          </p>
        </motion.div>

        {/* Dynamic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isFeatured = project.featured
            const ProjectIcon = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    isFeatured
                      ? 'bg-slate-900/90 border-emerald-500/30 hover:border-emerald-500/50 shadow-2xl shadow-emerald-950/20'
                      : 'bg-slate-900/80 border-white/[0.08] hover:border-emerald-500/30 shadow-lg shadow-black/30'
                  }`}
                >
                  <div>
                    {/* Project Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <ProjectIcon size={22} />
                      </div>
                      {isFeatured && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          <Sparkles size={13} />
                          Projet Phare
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors py-1.5"
                        >
                          <Github size={18} />
                          Code source
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-1.5"
                        >
                          <ExternalLink size={18} />
                          Voir la démo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}