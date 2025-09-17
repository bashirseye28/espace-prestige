'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Amina Ba',
    role: 'Ingénieure / Architecte-urbaniste',
    quote:
      'Spécialiste de la planification urbaine et de la conception durable, elle incarne la vision à long terme.',
  },
  {
    name: 'Bineta',
    role: 'Responsable administratif et financier',
    quote:
      'Organisée, rigoureuse et stratégique, elle garantit la fluidité et la transparence des opérations.',
  },
  {
    name: 'Assane Diouf',
    role: 'Technicien bâtiment',
    quote:
      'Homme de terrain méticuleux, il assure la conformité technique et la qualité d’exécution.',
  },
  {
    name: 'Omar Cissokho',
    role: 'Technicien bâtiment',
    quote:
      'Précis et engagé, il veille à la mise en œuvre rigoureuse de chaque détail sur chantier.',
  },
  {
    name: 'Assane Fall',
    role: 'Ingénieur',
    quote:
      'Expert structure, il conjugue ingénierie, innovation et sécurité pour des ouvrages d’excellence.',
  },
]

const logoImage =
  'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752637147/logoPrestige_wfuolz.png'

export default function TeamSection() {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Notre équipe
        </h2>
        <div className="w-16 h-1 mx-auto bg-accent rounded-full mb-6" />
        <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
          Une alliance de compétences et de valeurs. Chaque membre incarne l’excellence, la créativité
          et l’engagement au service de vos projets.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.04,
              rotate: [-0.3, 0.3, 0],
              transition: { duration: 0.4 },
            }}
            className="bg-lavender/50 p-6 rounded-2xl shadow-card border border-lavender backdrop-blur-sm hover:shadow-2xl transition-transform cursor-default"
          >
            <Image
              src={logoImage}
              alt={member.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-primary mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-primary text-center">{member.name}</h4>
            <p className="text-sm text-muted italic mb-2 text-center">{member.role}</p>
            <p className="text-sm text-gray-700 text-center">{member.quote}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}