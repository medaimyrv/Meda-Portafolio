'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'medaimy@gmail.com',
    href: 'mailto:medaimy@gmail.com',
    color: 'hover:text-primary-pink',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/medaimy-rivera',
    href: 'https://linkedin.com',
    color: 'hover:text-primary-cyan',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@medaimyrv',
    href: 'https://github.com/medaimyrv',
    color: 'hover:text-primary-purple',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: '', email: '', message: '' })
    alert('¡Mensaje enviado! Te contactaré pronto.')
  }

  return (
    <section id="contacto" className="py-24 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-pink/10 rounded-full filter blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full filter blur-[100px]" />
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
          <span className="text-primary-pink font-medium">Hablemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Ponte en <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte y ver cómo puedo ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-400 mb-8">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                No dudes en contactarme.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-dark-lighter hover:bg-dark-card transition-all duration-300 group ${item.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-pink/20 to-primary-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Decoración */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 text-center">
                  También puedes encontrarme en redes sociales
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-6">
                Envíame un Mensaje
              </h3>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-lighter border border-white/10 focus:border-primary-pink focus:ring-1 focus:ring-primary-pink outline-none transition-all duration-300 text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-lighter border border-white/10 focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan outline-none transition-all duration-300 text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-lighter border border-white/10 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none transition-all duration-300 text-white resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-pink via-primary-purple to-primary-cyan text-white font-semibold hover:shadow-glow-multi transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
