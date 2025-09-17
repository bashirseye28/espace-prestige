'use client'

import { motion } from 'framer-motion'
import { Star, Eye, Leaf } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const values = [
  {
    icon: Star,
    title: 'Excellence',
    description:
      'Nous visons l’excellence à chaque étape du projet — de la conception à la réalisation, avec un souci constant du détail et de la qualité.',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description:
      'Une communication claire, honnête et fluide avec nos clients pour garantir une collaboration de confiance et sans surprises.',
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description:
      'Des choix responsables et durables pour un impact environnemental maîtrisé et une construction tournée vers l’avenir.',
  },
]

export default function Values() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle title="Nos valeurs" center />
        <p className="text-muted max-w-2xl mx-auto mt-4">
          Les fondations de notre engagement professionnel.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <value.icon size={24} />
              </div>
              <h3 className="text-lg font-heading text-primary mb-2">{value.title}</h3>
              <p className="text-sm text-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}