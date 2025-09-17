'use client'

import { motion } from 'framer-motion'

export default function ProjectsQuote() {
  return (
    <section className="bg-lavender/30 py-24 px-4 sm:px-8 lg:px-32 text-center">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-serif italic text-primary max-w-4xl mx-auto"
      >
        "Chaque projet que nous réalisons est une œuvre d’art, pensée pour durer, inspirée par vos rêves."
      </motion.blockquote>
    </section>
  )
}