import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-dark text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
