'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Timer, Users, Star } from 'lucide-react'

export default function DevisClosingSection() {
  return (
    <section className="bg-white py-28 px-4 sm:px-10 lg:px-32">
      {/* Pourquoi nous choisir ? */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl font-heading font-bold text-primary mb-4">
          Pourquoi nous choisir ?
        </h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
        <p className="text-lg text-muted">
          Bien plus qu’un devis : un accompagnement premium, humain et sur-mesure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
        {[ 
          { icon: Timer, title: '+3 ans', desc: 'd’expérience dans le secteur' },
          { icon: Users, title: '8 experts', desc: 'pluridisciplinaires à votre service' },
          { icon: Star, title: 'Projets premium', desc: 'sur-mesure et haut de gamme' },
          { icon: CheckCircle, title: 'Accompagnement', desc: 'humain & réactif' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            className="p-6 bg-[#F9F6FC] rounded-2xl shadow-card"
          >
            <item.icon className="mx-auto text-primary mb-4" size={36} />
            <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Garantie & délai */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <p className="text-xl text-muted">
          Nous nous engageons à vous répondre sous <span className="text-primary font-semibold">48h</span> avec une
          proposition claire, gratuite et sans engagement.
        </p>
      </motion.div>
    </section>
  )
}