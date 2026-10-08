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
  metadataBase: new URL('https://mamadoudiallo.com'),
  title: 'Mamadou Diallo | Développeur Web Full-Stack',
  description: 'Développeur Web Full-Stack freelance basé à Dakar. Je conçois des applications web modernes, performantes et orientées utilisateur.',
  keywords: ['développeur web', 'full-stack', 'freelance', 'React', 'Next.js', 'Node.js', 'Dakar', 'Sénégal'],
  authors: [{ name: 'Mamadou Diallo' }],
  icons: {
    icon: '/profile.png',
  },
  openGraph: {
    title: 'Mamadou Diallo | Développeur Web Full-Stack',
    description: 'Développeur Web Full-Stack freelance basé à Dakar. Applications web modernes et performantes.',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 720,
        height: 1280,
        alt: 'Mamadou Diallo - Développeur Web Full-Stack',
      },
    ],
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