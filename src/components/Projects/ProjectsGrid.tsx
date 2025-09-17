'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Résidence Les Horizons',
    location: 'Dakar, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752730367/project-01_vruaef.jpg',
    description: 'Immeuble résidentiel moderne alliant lignes épurées et durabilité.',
    slug: 'residence-les-horizons',
  },
  {
    title: 'Siège social NDS Group',
    location: 'Saly',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752730367/project-02_pjga0a.jpg',
    description: 'Un espace corporate élégant, fonctionnel et baigné de lumière naturelle.',
    slug: 'siege-social-nds-group',
  },
  {
    title: 'Villa Prestige',
    location: 'Ngor Almadies',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752730367/project-03_bzi9yp.jpg',
    description: 'Conception d’une villa d’architecte sur-mesure avec vue panoramique.',
    slug: 'villa-prestige',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Nos réalisations
        </motion.h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Une sélection de projets qui témoignent de notre expertise en architecture, urbanisme et construction.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition"
          >
            <Link href={`/projets/${project.slug}`}>
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-primary mb-1">{project.title}</h3>
                <p className="text-sm text-muted italic mb-2">{project.location}</p>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}