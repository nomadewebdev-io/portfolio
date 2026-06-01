'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

const projects = [
  {
    title: 'Application E-commerce',
    description: 'Plateforme e-commerce complète avec panier, paiement stripe et panneau d\'administration. Stack: Next.js, Prisma, PostgreSQL.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    comingSoon: false,
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour la visualisation de données en temps réel. Graphiques dynamiques et rapports exportables.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    comingSoon: false,
  },
  {
    title: 'Application Météo',
    description: 'Application météo moderne et élégante permettant de consulter le climat en temps réel de toutes les villes du monde. Données actualisées via API OpenWeatherMap, design responsive avec animations fluides.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/nomadewebdev-io/meteo-app',
    demo: 'https://frolicking-griffin-79bb29.netlify.app/',
    comingSoon: false,
  },
  {
    title: 'Ma Liste de Tâches',
    description: 'Application web simple et élégante pour gérer vos tâches quotidiennes. Fonctionnalités : ajout/suppression de tâches, persistance des données avec localStorage, compteur de progression, design moderne responsive.',
    tags: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
    github: 'https://github.com/nomadewebdev-io/application-Todo-list',
    demo: 'https://application-list-de-tache.netlify.app/',
    comingSoon: false,
  },
  {
    title: 'API REST complète',
    description: 'API RESTful pour une application mobile avec authentification JWT, upload de fichiers et documentation Swagger.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    github: '#',
    demo: '#',
    comingSoon: false,
  },
  {
    title: 'Prochain projet',
    description: 'Un nouveau projet passionnant arrive bientôt. Restez à l\'écoute pour les mises à jour.',
    tags: ['???'],
    github: '#',
    demo: '#',
    comingSoon: true,
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Mes Réalisations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions concrètes pour des problèmes réels
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${project.comingSoon ? 'opacity-60' : ''}`}>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  {project.comingSoon && (
                    <Badge variant="primary">Prochainement</Badge>
                  )}
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                {!project.comingSoon && (
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                      Démo
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}