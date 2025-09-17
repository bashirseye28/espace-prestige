'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectsCTA() {
  return (
    <section className="bg-primary py-20 px-4 sm:px-8 lg:px-32 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Un projet en tête ?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Notre équipe vous accompagne à chaque étape. Discutons-en autour d’un café ou d’un plan.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:bg-accent hover:text-white transition"
        >
          Contactez-nous
        </Link>
      </motion.div>
    </section>
  )
}