'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Malick Ndiaye',
    quote:
      'Une équipe professionnelle, à l’écoute et d’une rigueur exceptionnelle. Mon projet a été livré dans les délais avec une qualité irréprochable.',
  },
  {
    name: 'Sokhna Aicha',
    quote:
      'J’ai été impressionnée par la créativité et l’attention portée aux détails. Espace Prestige a su donner vie à ma vision avec élégance.',
  },
  {
    name: 'Anonyme',
    quote:
      'Une collaboration fluide, des conseils pertinents et un résultat à la hauteur de mes attentes. Je recommande vivement leurs services.',
  },
]

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-32 px-4 sm:px-8 lg:px-24 text-white bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2356_hmyfdu.jpg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Overlay plus clair */}
      <div className="absolute inset-0 bg-black/40 z-0 backdrop-blur-sm" />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading font-bold text-[#8F5FBF]"
        >
          Ce que disent nos clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted mt-4 max-w-2xl mx-auto text-white md:text-lg"
        >
          Chaque témoignage reflète notre engagement envers l’excellence et la satisfaction.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/95 text-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-gray-100"
          >
            <Quote className="text-primary w-10 h-10 mb-4" />
            <p className="text-base leading-relaxed italic mb-6">
              “{testimonial.quote}”
            </p>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mt-auto">
              — {testimonial.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}