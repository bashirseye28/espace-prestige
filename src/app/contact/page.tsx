import type { Metadata } from 'next'
import ContactHero from '@/components/Contact/ContactHero'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'
import SocialLinks from '@/components/Contact/SocialLinks'

export const metadata: Metadata = {
  title: 'Contact | Espace Prestige',
  description:
    'Contactez Espace Prestige pour discuter de vos projets architecturaux, urbains ou immobiliers. Notre équipe vous accompagne avec professionnalisme et réactivité.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Espace Prestige',
    description:
      'Prenez contact avec Espace Prestige pour vos projets de construction, d’architecture ou d’urbanisme. Réactivité, conseil et accompagnement sur-mesure.',
    url: 'https://www.espaceprestige.com/contact',
    siteName: 'Espace Prestige',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Espace Prestige - Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Espace Prestige',
    description:
      'Un projet à réaliser ? Contactez Espace Prestige et échangeons sur vos idées.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <SocialLinks />
    </>
  )
}