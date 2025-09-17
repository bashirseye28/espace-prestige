// src/app/a-propos/page.tsx

import type { Metadata } from 'next'
import AboutHero from '@/components/About/AboutHero'
import History from '@/components/About/History'
import Values from '@/components/About/Values'
// import TeamSection from '@/components/About/Team'
import Expertise from '@/components/About/Expertise'
import Philosophy from '@/components/About/Philosophy'
import Vision from '@/components/About/Vision'

export const metadata: Metadata = {
  title: 'À propos | Espace Prestige',
  description:
    "Découvrez l'histoire, l'équipe et les valeurs d’Espace Prestige : une entreprise d’architecture et de construction haut de gamme dédiée à l’excellence, l’éthique et la vision.",
  keywords: [
    'Espace Prestige',
    'architecture',
    'construction',
    'valeurs',
    'équipe',
    'urbanisme',
    'philosophie',
    'expertise architecturale',
  ],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos de nous | Espace Prestige',
    description:
      "Découvrez notre équipe, nos valeurs et notre engagement dans l’architecture et la construction haut de gamme.",
    url: 'https://www.espaceprestige.com/a-propos',
    siteName: 'Espace Prestige',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Espace Prestige - À propos',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Prestige | À propos',
    description:
      "En savoir plus sur notre histoire, notre équipe et notre vision du futur dans le monde de l’architecture.",
    images: ['/images/og-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <History />
      <Values />
      {/* <TeamSection /> */}
      <Expertise />
      <Philosophy />
      <Vision />
    </>
  )
}