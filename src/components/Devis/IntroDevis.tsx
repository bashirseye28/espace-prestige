'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ShieldCheck, Sparkles } from 'lucide-react'

export default function IntroDevis() {
  return (
    <section className="bg-white py-24 px-4 sm:px-10 lg:px-32 text-text">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Pourquoi demander un devis ?
        </motion.h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Une estimation claire, transparente et adaptée à vos besoins pour lancer votre projet en toute
          confiance.
        </motion.p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: CheckCircle,
            title: 'Transparence totale',
            desc: 'Un chiffrage précis, sans surprise, établi par des experts du métier.',
          },
          {
            icon: ShieldCheck,
            title: 'Engagement & fiabilité',
            desc: 'Un accompagnement sérieux et rigoureux à chaque étape de votre projet.',
          },
          {
            icon: Sparkles,
            title: 'Conseils personnalisés',
            desc: 'Nous vous orientons vers les meilleures solutions techniques et esthétiques.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="bg-[#F9F6FC] rounded-2xl p-8 text-center shadow-card"
          >
            <item.icon size={36} className="text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-primary font-heading mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}