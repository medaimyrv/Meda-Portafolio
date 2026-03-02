import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Medaimy Rivera Valiente | Ingeniera Informática & IA',
  description: 'Portafolio profesional de Medaimy Rivera Valiente - Ingeniera Informática especializada en Inteligencia Artificial, Desarrollo Web y Ciencia de Datos.',
  keywords: ['ingeniera', 'IA', 'inteligencia artificial', 'desarrolladora web', 'ciencia de datos', 'python', 'react', 'nextjs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-dark text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
