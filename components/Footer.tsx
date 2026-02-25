'use client'

import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/medaimyrv', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:medaimyrivera@gmail.com', label: 'Email' },
]

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-purple/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <span className="text-2xl font-display font-bold text-gradient">MRV</span>
            <p className="text-gray-400 mt-4 text-sm">
              Ingeniera Informática especializada en IA, desarrollo web y ciencia de datos.
              Transformando ideas en soluciones tecnológicas.
            </p>
          </div>

          {/* Links de navegación */}
          <div className="md:text-center">
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} Medaimy Rivera Valiente. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <FaHeart className="text-primary-pink w-4 h-4" /> y mucho código
          </p>
        </div>
      </div>
    </footer>
  )
}
