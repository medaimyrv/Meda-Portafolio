'use client'

import { motion } from 'framer-motion'
import { FaYoutube, FaLaptopCode, FaRocket, FaBookOpen } from 'react-icons/fa'
import { TbBulb, TbCode, TbBrain, TbWorld } from 'react-icons/tb'

const learningPaths = [
  {
    area: 'Desarrollo Web',
    description: 'HTML, CSS, JavaScript, React y Next.js',
    sources: ['Jon Mircha', 'Lucas Dalto'],
    icon: TbCode,
    color: 'from-primary-pink to-primary-purple',
  },
  {
    area: 'Inteligencia Artificial',
    description: 'Machine Learning, Deep Learning y modelos de IA',
    sources: ['Dot CSV', 'Ringa Tech', 'Codificando Bits'],
    icon: TbBrain,
    color: 'from-primary-purple to-primary-cyan',
  },
  {
    area: 'Ciencia de Datos',
    description: 'Python, Pandas, NumPy, visualización y análisis',
    sources: ['Platzi', 'EDteam', 'CodingMindset'],
    icon: TbBulb,
    color: 'from-primary-cyan to-primary-pink',
  },
  {
    area: 'Práctica Real',
    description: 'Proyectos propios desplegados y código abierto en GitHub',
    sources: ['TheMediaBoot', 'SocialGenius-AI'],
    icon: FaRocket,
    color: 'from-primary-pink to-primary-cyan',
  },
]

const stats = [
  { value: '500+', label: 'Horas de estudio', icon: FaBookOpen },
  { value: '2', label: 'Productos lanzados', icon: FaRocket },
  { value: '10+', label: 'Tecnologías dominadas', icon: FaLaptopCode },
  { value: '∞', label: 'Ganas de aprender', icon: TbWorld },
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
          className="text-center mb-6"
        >
          <span className="text-primary-pink font-medium">Formación Continua</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Aprendizaje <span className="text-gradient">Autodidacta</span>
          </h2>
        </motion.div>

        {/* Filosofía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-400 italic">
              &quot;Hoy existe suficiente documentación de calidad en internet para quien
              desee abrirse camino de forma autodidacta, aun sin presupuesto.
              Solo hace falta disciplina y ganas de aprender.&quot;
            </p>
          </div>
        </motion.div>

        {/* Rutas de aprendizaje */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${path.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{path.area}</h4>
                  <p className="text-gray-400 text-sm mb-3">{path.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.sources.map((source) => (
                      <span
                        key={source}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-dark-lighter text-xs text-gray-400"
                      >
                        <FaYoutube className="w-3 h-3 text-red-500" />
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="text-center glass rounded-2xl p-5 hover:bg-white/5 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-pink" />
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
