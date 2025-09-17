import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Inter, Open_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

// Font setup
const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.espaceprestige.com'),
  title: {
    default: 'Espace Prestige | Architecture & Construction Haut de Gamme',
    template: '%s | Espace Prestige',
  },
  description:
    'Découvrez Espace Prestige, cabinet d’architecture et entreprise de construction haut de gamme spécialisée dans les projets sur-mesure, durables et élégants.',
  keywords: [
    'architecture premium',
    'construction haut de gamme',
    'urbanisme durable',
    'design intérieur',
    'immobilier prestige',
    'génie civil',
    'Espace Prestige',
    'bureau d’études',
    'projets architecturaux',
    'chantier de qualité',
  ],
  authors: [{ name: 'Espace Prestige', url: 'https://www.espaceprestige.com' }],
  creator: 'Espace Prestige',
  publisher: 'Espace Prestige',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
    languages: { fr: '/' },
  },
  openGraph: {
    title: 'Espace Prestige | Créer l’exception. Construire l’excellence.',
    description:
      'Expertise en architecture, construction et urbanisme. Une équipe passionnée au service de vos projets les plus ambitieux.',
    url: 'https://www.espaceprestige.com',
    siteName: 'Espace Prestige',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Espace Prestige - Architecture et excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@espaceprestige',
    title: 'Espace Prestige | Architecture et Urbanisme',
    description:
      'Bureau d’architecture premium et entreprise générale de construction. Créez un projet unique, élégant et durable avec notre équipe.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#5F2C91',
  category: 'Architecture, Construction, Immobilier',
}

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} ${openSans.variable}`}>
      <body className="bg-white text-[#222] font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}