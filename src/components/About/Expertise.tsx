'use client'

import { motion } from 'framer-motion'
import { Building2, Ruler, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Architecture',
    description:
      'Nous imaginons des espaces élégants, fonctionnels et intemporels, où l’esthétique sublime la technique.',
  },
  {
    icon: Ruler,
    title: 'Urbanisme',
    description:
      'Aménagements cohérents, durables et pensés pour l’humain, à l’échelle du quartier comme de la ville.',
  },
  {
    icon: Briefcase,
    title: 'Construction',
    description:
      'Réalisation de chantiers haut de gamme avec rigueur, transparence, et sens du détail.',
  },
]

const stats = [
  { value: 3, label: 'Années d’expérience' },
  { value: 25, label: 'Projets livrés' },
  { value: 8, label: 'Experts passionnés' },
]

export default function Expertise() {
  return (
    <section className="bg-white py-28 px-4 sm:px-10 lg:px-32">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Notre expertise
        </motion.h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-muted text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Un savoir-faire pluridisciplinaire pour donner vie à vos projets les plus ambitieux,
          avec excellence et sens du détail.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="group bg-[#F9F6FC] p-8 rounded-2xl border-l-4 border-primary shadow-card hover:shadow-xl transition"
          >
            <service.icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <span className="text-5xl font-bold text-primary">{stat.value}+</span>
            <p className="text-muted mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}