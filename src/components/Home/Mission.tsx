'use client'

import { motion } from 'framer-motion'
import { LucideTarget, LucideLeaf, LucideHandshake } from 'lucide-react'

export default function Mission() {
  const values = [
    {
      icon: <LucideTarget size={32} className="text-primary" aria-hidden="true" />,
      title: 'Excellence',
      text: 'Des standards élevés à chaque étape, pour des projets réalisés avec rigueur et précision.',
    },
    {
      icon: <LucideLeaf size={32} className="text-primary" aria-hidden="true" />,
      title: 'Durabilité',
      text: 'Des solutions architecturales et techniques pensées pour durer et respecter l’environnement.',
    },
    {
      icon: <LucideHandshake size={32} className="text-primary" aria-hidden="true" />,
      title: 'Proximité',
      text: 'Une relation humaine et engagée avec nos clients, fondée sur l’écoute et la confiance.',
    },
  ]

  return (
    <section className="bg-[#F9F5FC] text-text py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-heading font-semibold text-left text-primary mb-4"
        >
          Notre mission
        </motion.h2>

        {/* Paragraphe d’intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-muted max-w-3xl mb-12 leading-relaxed"
        >
          Chez Espace Prestige, nous croyons que chaque projet est une opportunité de bâtir
          durablement, de valoriser un territoire et de sublimer le quotidien. Notre mission est
          d’accompagner nos clients avec excellence, transparence et passion, de la conception à la
          réalisation.
        </motion.p>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}