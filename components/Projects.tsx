'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo?: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TheMediaBoot',
    description:
      'Transforma audio y texto en videos profesionales usando IA. Sin necesidad de habilidades de edición.',
    image: '/projects/mediabot.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'IA'],
    github: 'https://github.com/medaimyrv/mediabot',
    color: 'from-primary-purple to-primary-cyan',
  },
  {
    id: 2,
    title: 'SocialGenius-AI',
    description:
      'Asistente de IA que analiza tu negocio y genera estrategias completas de contenido para Instagram, TikTok, LinkedIn y más.',
    image: '/projects/socialgenius.jpg',
    tags: ['Python', 'IA', 'NLP', 'Estrategia de Contenido'],
    github: 'https://github.com/medaimyrv/SocialGenius-AI',
    color: 'from-primary-pink to-primary-purple',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 relative">
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-cyan/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-purple font-medium">Mi Trabajo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Soluciones reales construidas con IA y desarrollo web moderno
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-500"
            >
              {/* Imagen placeholder con gradiente */}
              <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-dark/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-display font-bold text-white/20">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-white/20 transition-all"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-white/20 transition-all"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-display font-semibold mb-2 group-hover:text-gradient transition-all duration-300 flex items-center gap-2 hover:underline"
                >
                  {project.title}
                  <FaGithub className="w-4 h-4 text-gray-500" />
                </a>
                <p className="text-gray-400 text-sm mb-4 mt-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-dark-lighter text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/medaimyrv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
