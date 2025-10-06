// app/page.tsx

import type { Metadata } from 'next'
import HomeHero from '@/components/Home/HomeHero'
import WhoWeAre from '@/components/Home/WhoWeAre'
import Mission from '@/components/Home/Mission'
import Testimonials from '@/components/Home/Testimonials'
import CallToAction from '@/components/Home/CallToAction'

export const metadata: Metadata = {
  title: 'Accueil | Espace Prestige',
  description:
    'Bienvenue chez Espace Prestige, cabinet d’architecture et entreprise de construction haut de gamme. Découvrez notre expertise, nos valeurs et notre mission.',
  keywords: [
    'Espace Prestige',
    'architecture haut de gamme',
    'construction premium',
    'urbanisme durable',
    'bâtiment',
    'bureau d’architecte',
    'projets immobiliers',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Espace Prestige | Excellence en architecture et construction',
    description:
      'Expertise en architecture, construction et urbanisme. Une équipe passionnée au service de vos projets les plus ambitieux.',
    url: 'https://www.espaceprestigesenegal.com',
    siteName: 'Espace Prestige',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Espace Prestige Hero',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Prestige | Cabinet d’architecture et entreprise BTP',
    description:
      'Cabinet d’architecture haut de gamme et entreprise de construction. Concrétisez vos projets avec style et exigence.',
    images: ['/images/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhoWeAre />
      <Mission />
      <Testimonials />
      <CallToAction />
    </>
  )
}