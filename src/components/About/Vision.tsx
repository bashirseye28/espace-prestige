'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote } from 'lucide-react'

export default function Vision() {
  return (
    <section className="bg-[#F9F6FC] py-28 px-4 sm:px-10 lg:px-32 text-center text-text">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Notre vision
        </h2>
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-8" />

        <blockquote className="text-muted text-lg md:text-xl italic relative px-6">
          <Quote size={28} className="text-accent absolute -top-2 left-0" />
          Chez Espace Prestige, chaque projet est une promesse de sens,
          de qualité et d’humanité.
        </blockquote>

        <p className="text-muted text-base mt-8">
          Envie de donner vie à une idée audacieuse ? Parlons-en.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-primary text-white font-medium rounded-full shadow-md hover:bg-accent transition"
        >
          Contactez-nous
        </Link>
      </motion.div>
    </section>
  )
}