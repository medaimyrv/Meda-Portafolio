'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const timeline = [
  {
    type: 'education',
    title: 'Ingeniería Informática',
    organization: 'Universidad',
    period: '2020 - 2024',
    description: 'Formación en desarrollo de software, bases de datos, algoritmos e inteligencia artificial.',
    icon: FaGraduationCap,
  },
  {
    type: 'work',
    title: 'Ingeniera de IA',
    organization: 'Proyectos Independientes',
    period: '2024 - Presente',
    description: 'Desarrollo de soluciones con IA: generación de video con TheMediaBoot, estrategias de contenido con SocialGenius-AI, automatización de flujos y agentes inteligentes.',
    icon: FaBriefcase,
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative">
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-purple/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary-pink/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-cyan font-medium">Mi Trayectoria</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Experiencia & <span className="text-gradient">Educación</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Línea central */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-pink via-primary-purple to-primary-cyan" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? 'md:pr-12 pl-20 md:pl-0'
                  : 'md:pl-12 md:ml-auto pl-20'
              }`}
            >
              {/* Punto en la línea */}
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-pink to-primary-cyan left-[26px] md:left-auto ${
                index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'
              }`}>
                <div className="absolute inset-1 rounded-full bg-dark" />
              </div>

              {/* Tarjeta */}
              <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-pink/20 to-primary-cyan/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-pink" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary-purple/20 text-primary-purple font-medium">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold">{item.title}</h3>
                <p className="text-primary-cyan text-sm mb-2">{item.organization}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
