'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Sparkles } from 'lucide-react'

export default function Philosophy() {
  return (
    <section className="bg-white py-28 px-4 sm:px-10 lg:px-32">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Notre philosophie
        </motion.h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-muted text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Notre approche repose sur l’authenticité, l’innovation et le respect.
          Chaque projet est un équilibre entre esthétisme, durabilité et vision à long terme.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: Sparkles,
            title: 'Excellence & Détail',
            desc: 'Rien n’est laissé au hasard. Chaque texture, volume ou proportion est pensé avec soin.',
          },
          {
            icon: ShieldCheck,
            title: 'Éthique & Engagement',
            desc: 'Nous construisons en conscience, pour les générations d’aujourd’hui et de demain.',
          },
          {
            icon: Lightbulb,
            title: 'Créativité & Vision',
            desc: 'Imaginer des espaces intemporels, utiles et porteurs de sens. Voilà notre ambition.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-[#F9F6FC] rounded-2xl p-8 text-center shadow-card border-l-4 border-primary"
          >
            <item.icon size={36} className="text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-primary font-heading mb-2">
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}