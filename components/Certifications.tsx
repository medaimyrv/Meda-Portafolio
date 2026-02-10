'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { SiCoursera, SiUdemy, SiGoogle } from 'react-icons/si'
import { TbCertificate } from 'react-icons/tb'

const certifications = [
  {
    title: 'Machine Learning',
    issuer: 'Coursera / Stanford',
    icon: SiCoursera,
    date: '2024',
    color: 'from-primary-pink to-primary-purple',
  },
  {
    title: 'Python para Ciencia de Datos',
    issuer: 'Udemy',
    icon: SiUdemy,
    date: '2024',
    color: 'from-primary-purple to-primary-cyan',
  },
  {
    title: 'Desarrollo Web con React',
    issuer: 'Plataforma Online',
    icon: TbCertificate,
    date: '2023',
    color: 'from-primary-cyan to-primary-pink',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    icon: SiGoogle,
    date: '2024',
    color: 'from-primary-pink to-primary-cyan',
  },
]

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-24 relative">
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-pink/50 to-transparent" />
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
          <span className="text-primary-pink font-medium">Formación Continua</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Certificaciones & <span className="text-gradient">Cursos</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Aprendizaje constante para mantenerme al día con las últimas tecnologías
          </p>
        </motion.div>

        {/* Grid de certificaciones */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
              <p className="text-gray-500 text-xs mb-2">{cert.issuer}</p>
              <span className="text-xs text-primary-cyan">{cert.date}</span>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          * Actualiza esta sección con tus certificaciones reales
        </motion.p>
      </div>
    </section>
  )
}
