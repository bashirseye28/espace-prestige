'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const projects = [
  {
    title: 'Résidence Les Horizons',
    location: 'Dakar, Sénégal',
    description: 'Immeuble résidentiel haut standing avec vues panoramiques et finitions de luxe.',
    images: [
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643278/1176_hnojxq.jpg',
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2356_hmyfdu.jpg',
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643547/9832_xguvsp.jpg',
    ],
  },
  {
    title: 'Siège social ATLAS',
    location: 'Abidjan, Côte d’Ivoire',
    description: 'Bâtiment administratif moderne intégrant les dernières normes environnementales.',
    images: [
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643547/9832_xguvsp.jpg',
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643278/1176_hnojxq.jpg',
    ],
  },
  {
    title: 'Complexe scolaire Élan',
    location: 'Thiès, Sénégal',
    description: 'Ensemble pédagogique complet alliant ergonomie, durabilité et convivialité.',
    images: [
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2356_hmyfdu.jpg',
      'https://res.cloudinary.com/dnmoy5wua/image/upload/v1752643278/1176_hnojxq.jpg',
    ],
  },
]

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const handleClose = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const showNext = () => {
    if (selectedProject !== null) {
      const total = projects[selectedProject].images.length
      setCurrentImage((currentImage + 1) % total)
    }
  }

  const showPrev = () => {
    if (selectedProject !== null) {
      const total = projects[selectedProject].images.length
      setCurrentImage((currentImage - 1 + total) % total)
    }
  }

  return (
    <section className="bg-white py-28 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Nos projets récents
        </motion.h2>
        <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Découvrez quelques-unes de nos réalisations les plus marquantes, entre innovation,
          exigence technique et esthétisme.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-card cursor-pointer group"
            onClick={() => setSelectedProject(index)}
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-primary font-heading">{project.title}</h3>
              <p className="text-sm text-muted">{project.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Transition show={selectedProject !== null}>
        <Dialog onClose={handleClose} className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white max-w-4xl w-full rounded-xl overflow-hidden shadow-xl relative">
              {selectedProject !== null && (
                <div className="relative">
                  <Image
                    src={projects[selectedProject].images[currentImage]}
                    alt="Project image"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Controls */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white"
                  >
                    <X size={20} />
                  </button>
                  <button
                    onClick={showPrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Description */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-muted italic text-sm mb-2">
                      {projects[selectedProject].location}
                    </p>
                    <p className="text-text leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}