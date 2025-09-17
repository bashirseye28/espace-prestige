'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="relative bg-primary text-white py-20 px-4 sm:px-8 lg:px-24 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-heading font-semibold mb-4"
        >
          Un projet en tête ? Discutons-en.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8"
        >
          Notre équipe est prête à transformer vos idées en réalité, avec expertise et passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/demande-devis"
            className="px-6 py-3 bg-accent text-white text-sm font-medium uppercase tracking-wide hover:opacity-90 transition rounded-lg shadow-lg"
          >
            Demander un devis
          </Link>
          <Link
            href="/projets"
            className="px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-primary transition rounded-lg"
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}