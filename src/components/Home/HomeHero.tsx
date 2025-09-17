'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1752637631/2149661456_bm2ueg.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-8 md:px-24 flex flex-col justify-center py-28 sm:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
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
          className="text-lg sm:text-xl text-muted mb-6"
        >
          Construire. Rénover. Sublimer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-base text-gray-300 max-w-xl mb-8"
        >
          Espace Prestige est un groupe pluridisciplinaire intervenant dans les domaines du bâtiment, de l’architecture, de l’aménagement urbain et de la gérance immobilière. Notre mission : vous accompagner à chaque étape de votre projet, avec expertise, écoute et rigueur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/projets"
            className="px-6 py-3 bg-primary text-white text-sm font-medium uppercase tracking-wider hover:bg-accent transition text-center"
          >
            Nos réalisations
          </Link>
          <Link
            href="/demande-devis"
            className="px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-primary transition text-center"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  )
}