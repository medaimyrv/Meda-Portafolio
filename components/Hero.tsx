'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const roles = ['Ingeniera Informática', 'Ingeniera de IA', 'Desarrolladora Web', 'Científica de Datos']

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-dark">
        {/* Círculos de luz difusa animados */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink/20 rounded-full filter blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full filter blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary-cyan/20 rounded-full filter blur-[120px]"
        />

        {/* Grid de fondo */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Partículas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-pink/40 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.5,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary-pink-light">
              Ingeniera Informática & IA
            </span>
          </motion.div>

          {/* Nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Hola, soy{' '}
            <span className="text-gradient">Medaimy</span>
          </motion.h1>

          {/* Roles animados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-4 overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -32, -64, -96, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
            >
              {roles.map((role) => (
                <div key={role} className="h-8 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-medium text-primary-cyan">{role}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Transformo datos en conocimiento y código en experiencias.
            Construyo soluciones con <span className="text-primary-cyan">IA</span>,{' '}
            <span className="text-primary-pink">Machine Learning</span> y desarrollo web moderno.
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#proyectos"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-pink via-primary-purple to-primary-cyan text-white font-semibold hover:shadow-glow-multi transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
            </a>
            <a
              href="/projects/Curriculum vitae.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300 glow-border inline-flex items-center gap-2"
            >
              <FaDownload className="w-4 h-4" />
              Descargar CV
            </a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/medaimyrv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-pink transition-colors duration-300 hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-cyan transition-colors duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:medaimyrivera@gmail.com"
              className="text-gray-400 hover:text-primary-purple transition-colors duration-300 hover:scale-110"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gradient-to-b from-primary-pink to-primary-cyan rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
