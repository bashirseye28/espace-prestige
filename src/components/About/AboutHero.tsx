// src/components/About/AboutHero.tsx

'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-white h-[70vh] flex items-center justify-center px-4 sm:px-8 lg:px-24"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2356_hmyfdu.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          À propos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 font-body"
        >
          L’excellence au service du bâti, de l’humain et de la ville.
        </motion.p>
      </div>
    </section>
  )
}