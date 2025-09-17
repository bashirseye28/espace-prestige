'use client'

import { motion } from 'framer-motion'

export default function WhoWeAre() {
  const pillars = [
    {
      title: 'Notre vision',
      text: 'Créer des espaces harmonieux, durables et fonctionnels, au service de l’esthétique et de la performance.',
    },
    {
      title: 'Notre expertise',
      text: 'Une équipe pluridisciplinaire dotée d’une solide expérience en architecture, ingénierie et urbanisme.',
    },
    {
      title: 'Notre engagement',
      text: 'Un accompagnement rigoureux à chaque étape du projet, avec une écoute attentive et un souci du détail.',
    },
  ]

  return (
    <section className="bg-white text-text py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-heading font-bold text-left text-primary mb-4"
        >
          Qui sommes-nous ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-muted max-w-3xl mb-12 leading-relaxed"
        >
          Espace Prestige est bien plus qu’une entreprise : c’est une vision du bâti, une exigence
          d’excellence et un engagement durable envers nos clients. Nous réunissons les talents de
          l’architecture, du génie civil et de l’aménagement urbain pour sublimer chaque espace.
        </motion.p>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white border-l-4 border-primary pl-6 py-5 pr-4 shadow-md rounded-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}