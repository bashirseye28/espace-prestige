'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden text-white flex items-center justify-center">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://res.cloudinary.com/dnmoy5wua/image/upload/v1752637631/2149661456_bm2ueg.jpg"
          />
          <img
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1752637631/2149661456_bm2ueg.jpg"
            alt="Architecture moderne"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />

      {/* Content */}
      {/* <div className="relative z-20 max-w-6xl w-full px-4 md:px-24 text-center md:text-left py-20"> */}
      <div className="relative z-20 max-w-6xl w-full px-4 md:px-24 text-center md:text-left pt-32 md:pt-40 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Chaque espace mérite son prestige.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted mb-6"
        >
          Construire. Rénover. Sublimer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm md:text-base text-gray-300 max-w-2xl mb-8"
        >
          Espace Prestige est un groupe pluridisciplinaire intervenant dans les domaines du bâtiment,
          de l’architecture, de l’aménagement urbain et de la gérance immobilière. Notre mission :
          vous accompagner à chaque étape de votre projet, avec expertise, écoute et rigueur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link
            href="/projets"
            className="px-6 py-3 bg-primary text-white text-sm font-medium uppercase tracking-wide hover:bg-accent transition rounded-xl"
          >
            Nos réalisations
          </Link>
          <Link
            href="/demande-devis"
            className="px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-primary transition rounded-xl"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  )
}