'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section
      className="relative min-h-[70vh] sm:h-[80vh] w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4 sm:px-8 lg:px-24"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2356_hmyfdu.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Contactez-nous
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/90 font-body"
        >
          Une équipe à l’écoute pour vous accompagner à chaque étape de votre projet.
        </motion.p>
      </div>
    </section>
  )
}