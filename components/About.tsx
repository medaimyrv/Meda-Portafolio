'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaBrain, FaRocket } from 'react-icons/fa'

const highlights = [
  {
    icon: FaCode,
    title: 'Desarrollo Web',
    description: 'Creación de aplicaciones web modernas y responsivas con React y Next.js.',
    color: 'from-primary-pink to-primary-purple',
  },
  {
    icon: FaDatabase,
    title: 'Web Scraping',
    description: 'Extracción automatizada de datos con Beautiful Soup, Selenium y Scrapy.',
    color: 'from-primary-purple to-primary-cyan',
  },
  {
    icon: FaBrain,
    title: 'Ciencia de Datos',
    description: 'Análisis y visualización de datos con Python, Pandas y Polars.',
    color: 'from-primary-cyan to-primary-pink',
  },
  {
    icon: FaRocket,
    title: 'Soluciones IA',
    description: 'Implementación de modelos de machine learning y análisis predictivo.',
    color: 'from-primary-pink to-primary-cyan',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-purple/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-pink/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-pink font-medium">Conóceme</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-5 sm:p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Medaimy Rivera Valiente
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Soy <span className="text-primary-pink font-medium">Ingeniera Informática</span> graduada
                de la UCI con más de 15 años de experiencia en tecnología. Hoy me especializo en
                construir soluciones con inteligencia artificial que resuelven problemas reales.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Mi enfoque está en <span className="text-primary-cyan font-medium">flujos automatizados de IA</span>,
                desarrollo de agentes inteligentes y creación de aplicaciones web que integran modelos
                de IA para potenciar negocios y automatizar procesos.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Combino mi formación como ingeniera con un aprendizaje autodidacta constante
                para mantenerme a la vanguardia de las tecnologías emergentes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient">15+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Años de exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient">UCI</div>
                  <div className="text-xs sm:text-sm text-gray-500">Ing. Informática</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient">IA</div>
                  <div className="text-xs sm:text-sm text-gray-500">Aplicada</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjetas de highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
