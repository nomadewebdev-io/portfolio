'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ShoppingBag, BarChart3, CloudSun, CheckSquare, Server, Store } from 'lucide-react'
import Badge from '../ui/Badge'

interface Project {
  title: string
  status: 'Déployé' | 'En cours' | 'En développement'
  description: string
  tags: string[]
  icon: any
  github?: string
  demo?: string
}

const statusBadgeStyles: Record<string, string> = {
  'Déployé': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  'En cours': 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  'En développement': 'bg-sky-500/10 text-sky-400 border-sky-500/25',
}

const projects: Project[] = [
  {
    title: 'Marketplace de vêtements',
    status: 'En développement',
    description: 'Application web d\'achat et de vente de vêtements (marketplace et boutique officielle) pour le Sénégal et l\'Afrique de l\'Ouest.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    icon: ShoppingBag,
  },
  {
    title: 'Plateforme E-Commerce',
    status: 'En cours',
    description: 'Application web e-commerce en cours de développement : gestion de panier, catalogue de produits, tarification en Franc CFA (FCFA) et intégration Wave et Orange Money prévue.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'FCFA'],
    icon: Store,
  },
  {
    title: 'Dashboard Analytics',
    status: 'En cours',
    description: 'Tableau de bord de visualisation de données et d\'activité en cours de développement : indicateurs financiers en FCFA et graphiques dynamiques.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    icon: BarChart3,
  },
  {
    title: 'Passerelle API',
    status: 'En cours',
    description: 'Architecture backend de services API en cours d\'élaboration : structuration des points d\'accès REST, authentification JWT et documentation technique.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    icon: Server,
  },
  {
    title: 'Application Météo',
    status: 'Déployé',
    description: 'Application météo permettant de consulter le climat en temps réel de toutes les villes du monde via l\'API OpenWeatherMap, avec interface responsive et animations fluides.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    icon: CloudSun,
    github: 'https://github.com/nomadewebdev-io/meteo-app',
    demo: 'https://frolicking-griffin-79bb29.netlify.app/',
  },
  {
    title: 'Ma Liste de Tâches',
    status: 'Déployé',
    description: 'Application web simple et élégante pour gérer vos tâches quotidiennes avec persistance des données dans localStorage, compteur de progression et design responsive.',
    tags: ['HTML5', 'CSS3', 'JavaScript Vanilla', 'LocalStorage'],
    icon: CheckSquare,
    github: 'https://github.com/nomadewebdev-io/application-Todo-list',
    demo: 'https://application-list-de-tache.netlify.app/',
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
            Réalisations & Projets
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Aperçu des applications déployées et des projets actuellement en cours de développement.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="w-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-slate-900/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-lg shadow-black/30">
                  <div>
                    {/* Project Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <ProjectIcon size={22} />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusBadgeStyles[project.status]}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    {project.tags.length > 0 && (
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
                    )}

                    {/* Links if available */}
                    {(project.github || project.demo) && (
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        {project.github && (
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
                        {project.demo && (
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
                    )}
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