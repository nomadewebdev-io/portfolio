'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, Cloud } from 'lucide-react'
import Badge from '../ui/Badge'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'API REST / GraphQL', level: 80 },
      { name: 'Python / Django', level: 70 },
      { name: 'Authentication / Security', level: 80 },
    ],
  },
  {
    title: 'Base de données',
    icon: Database,
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    title: 'DevOps & Outils',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel / Netlify', level: 85 },
      { name: 'CI/CD', level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white/5">
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Mes Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une stack moderne pour des applications web performantes
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Git', 'Docker', 'Vercel'].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm hover:border-indigo-500/50 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}