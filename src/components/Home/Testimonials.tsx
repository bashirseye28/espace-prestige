'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Ahmad Bashir',
    title: 'Élève',
    quote:
      'Un service exceptionnel et une attention remarquable aux détails. Espace Prestige a dépassé toutes mes attentes.',
  },
  {
    name: 'Dongo Daara',
    title: 'Roube kat',
    quote:
      'Professionnels, à l’écoute et passionnés : une équipe qui sublime vraiment chaque projet avec élégance.',
  },
  {
    name: 'Beuy Cisse',
    title: 'Toogn kat',
    quote:
      'Chaque étape a été gérée avec rigueur. Le résultat final est tout simplement exceptionnel. Merci à Espace Prestige.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative text-text py-24 px-4 sm:px-8 lg:px-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1758109239/blending-futuristic-building-seamlessly-into-desert-landscape_evrd7m.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-white/10 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-heading font-semibold text-[#e3cbfa] mb-12"
        >
          Ils nous font confiance
        </motion.h2>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white/95 p-6 shadow-xl rounded-2xl text-left border-l-4 border-primary"
            >
              <Image
                src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1749318404/icon_u6qd4c.png"
                alt="Quote icon"
                width={32}
                height={32}
                className="mb-4"
              />
              <p className="font-serif text-lg italic text-gray-800 mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div className="text-sm text-muted">
                <span className="block font-semibold text-primary">{testimonial.name}</span>
                <span>{testimonial.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative w-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 p-6 shadow-xl rounded-2xl text-left border-l-4 border-primary"
          >
            <Image
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1749318404/icon_u6qd4c.png"
              alt="Quote icon"
              width={32}
              height={32}
              className="mb-4"
            />
            <p className="font-serif text-lg italic text-gray-800 mb-6 leading-relaxed">
              “{testimonials[current].quote}”
            </p>
            <div className="text-sm text-muted">
              <span className="block font-semibold text-primary">{testimonials[current].name}</span>
              <span>{testimonials[current].title}</span>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === current ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrent(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}