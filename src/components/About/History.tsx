'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function History() {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary relative mb-6">
            Notre histoire
            <span className="block w-16 h-1 bg-accent mt-2 rounded-full" />
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Fondée par des passionnés d’architecture et de construction, Espace Prestige est née
            d’une volonté commune : bâtir l’excellence dans le respect du patrimoine, de l’environnement
            et de l’humain.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Depuis nos débuts, nous allions tradition et modernité pour offrir des solutions sur-mesure,
            durables et esthétiques. Chaque projet que nous entreprenons est le reflet de notre engagement,
            de notre rigueur, et de notre sens du détail.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643278/1176_hnojxq.jpg"
            alt="Bâtiment moderne construit par Espace Prestige"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}