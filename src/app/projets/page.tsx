import type { Metadata } from 'next'
import ProjectsHero from '@/components/Projects/ProjectsHero'
import ProjectsGallery from '@/components/Projects/ProjectsGallery'
import ProjectsQuote from '@/components/Projects/ProjectsQuote'
import ProjectsCTA from '@/components/Projects/ProjectsCTA'

export const metadata: Metadata = {
  title: 'Nos projets | Espace Prestige',
  description:
    'Découvrez les projets signés Espace Prestige : bâtiments d’exception, aménagements urbains, chantiers de qualité alliant design et durabilité.',
  keywords: [
    'projets architecturaux',
    'chantier de construction',
    'architecture premium',
    'urbanisme',
    'réalisations',
    'références Espace Prestige',
  ],
  openGraph: {
    title: 'Nos projets | Espace Prestige',
    description:
      'Découvrez notre portfolio : des projets sur-mesure réalisés avec passion et précision.',
    url: 'https://www.espaceprestige.com/projets',
    siteName: 'Espace Prestige',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Projets réalisés par Espace Prestige',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos projets | Espace Prestige',
    description:
      'Projets réalisés par Espace Prestige dans l’architecture, la construction et l’urbanisme.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectsQuote />
      <ProjectsCTA />
      {/* <ProjectsGrid /> */}
    </>
  )
}