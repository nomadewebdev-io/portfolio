import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Mamadou Diallo | Développeur Web Full-Stack',
  description: 'Développeur Web Full-Stack freelance. Je conçois des applications web modernes, performantes et orientées utilisateur.',
  keywords: ['développeur web', 'full-stack', 'freelance', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Mamadou Diallo' }],
  openGraph: {
    title: 'Mamadou Diallo | Développeur Web Full-Stack',
    description: 'Développeur Web Full-Stack freelance. Je conçois des applications web modernes et performantes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}