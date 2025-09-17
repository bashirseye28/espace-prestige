// app/(pages)/demande-devis/page.tsx

import type { Metadata } from 'next'
import DemandeDevisHero from '@/components/Devis/DemandeDevisHero'
import IntroDevis from '@/components/Devis/IntroDevis'
import DevisForm from '@/components/Devis/DevisForm'
import DevisClosingSection from '@/components/Devis/DevisClosingSection'

export const metadata: Metadata = {
  title: 'Demande de devis | Espace Prestige',
  description:
    'Remplissez notre formulaire en ligne pour obtenir un devis personnalisé et sur-mesure. Espace Prestige vous accompagne dans la réalisation de vos projets.',
  keywords: [
    'demande de devis',
    'devis architecture',
    'projet construction',
    'cabinet d’architecte',
    'Espace Prestige',
    'tarifs travaux',
    'devis personnalisé',
    'accompagnement chantier',
  ],
  alternates: {
    canonical: '/demande-devis',
  },
  openGraph: {
    title: 'Demande de devis | Espace Prestige',
    description:
      'Obtenez un devis sur-mesure pour votre projet en quelques clics. Notre équipe vous répond rapidement avec expertise et transparence.',
    url: 'https://www.espaceprestige.com/demande-devis',
    siteName: 'Espace Prestige',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Demande de devis - Espace Prestige',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demandez votre devis personnalisé',
    description:
      'Obtenez un devis clair et rapide pour vos travaux d’architecture et de construction haut de gamme.',
    images: ['/images/og-image.jpg'],
  },
}

export default function DemandeDevisPage() {
  return (
    <>
      <DemandeDevisHero />
      <IntroDevis />
      <DevisForm />
      <DevisClosingSection />

      {/* Les autres sections suivront : points forts, formulaire, CTA final */}
    </>
  )
}