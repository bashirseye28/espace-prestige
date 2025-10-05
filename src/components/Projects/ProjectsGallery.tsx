'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion } from 'framer-motion'

const projectData = [
  {
    title: 'Villa contemporaine',
    category: 'Villas',
    location: 'Dakar, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952449/villa1_bz7hy7.jpg',
    shortDescription: 'Villa haut standing à l’architecture cubique, intégrant des matériaux nobles et de larges baies vitrées pour une luminosité optimale.',
    fullDescription: 'Conçue pour allier esthétisme moderne et confort haut de gamme, cette villa se distingue par ses volumes épurés, ses brise-soleil en bois et sa piscine à débordement, le tout dans un environnement paysager minimaliste.',
    // gallery: [
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952449/villa1_bz7hy7.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952448/villa2_zswhr5.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952447/villa3_yaeeq4.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952447/villa4_pczvfe.jpg'
    // ],
  },
  {
    title: 'Complexe résidentiel Saly',
    category: 'Résidentiels',
    location: 'Saly, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952446/complexes-re%CC%81sidentiels1_qa5m59.jpg',
    shortDescription: 'Ensemble d’habitations modernes avec finitions soignées, pensé pour le bien-être des résidents.',
    fullDescription: 'Situé à Saly, ce complexe propose des logements spacieux et élégants, dans un cadre sécurisé et verdoyant, intégrant des matériaux durables et une architecture inspirée du style méditerranéen.',
    // gallery: [
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952446/complexes-re%CC%81sidentiels1_qa5m59.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952445/complexes-re%CC%81sidentiels2_dgfgxr.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952444/complexes-re%CC%81sidentiels3_iwvtza.jpg'
    // ],
  },
  {
    title: 'Complexe résidentiel Dakar',
    category: 'Résidentiels',
    location: 'Dakar, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1759111447/complexes-re%CC%81sidentiels-Dakar_gn6evj.jpg',
    shortDescription: 'Programme résidentiel contemporain en plein cœur de Dakar.',
    fullDescription: 'Ce complexe propose des appartements modernes et lumineux, avec espaces verts et finitions de qualité supérieure, conçus pour répondre aux besoins d’une clientèle urbaine exigeante.',
    // gallery: [
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1759111447/complexes-re%CC%81sidentiels-Dakar_gn6evj.jpg'
    // ],
  },
  {
    title: 'Complexe résidentiel Lac Rose',
    category: 'Résidentiels',
    location: 'Lac Rose, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1759111447/complexes-re%CC%81sidentielsLacRose_tejifr.jpg',
    shortDescription: 'Résidence inspirée de l’environnement naturel du Lac Rose.',
    fullDescription: 'Ce projet intègre des logements modernes avec terrasses panoramiques et espaces communs conviviaux, tout en respectant le cadre exceptionnel du Lac Rose.',
    // gallery: [
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1759111447/complexes-re%CC%81sidentielsLacRose_tejifr.jpg'
    // ],
  },
  {
    title: 'Centre hôtelier',
    category: 'Hôtellerie',
    location: 'Saly, Sénégal',
    image: 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952443/ho%CC%82telier2_fnleen.jpg',
    shortDescription: 'Projet hôtelier raffiné mêlant tradition et modernité au cœur de Saint-Louis.',
    fullDescription: 'Inspiré de l’architecture locale, ce centre hôtelier propose des chambres élégantes, des espaces de détente contemporains et une intégration harmonieuse au paysage historique de Saint-Louis, avec une touche de modernité discrète.',
    // gallery: [
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952443/ho%CC%82telier2_fnleen.jpg',
    //   'https://res.cloudinary.com/dnmoy5wua/image/upload/v1758952443/ho%CC%82telier1_geolqm.jpg'
    // ],
  }
]

const categories = ['Tous', 'Villas', 'Résidentiels', 'Hôtellerie']

export default function ProjectsGallery() {
  const [filter, setFilter] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredProjects =
    filter === 'Tous' ? projectData : projectData.filter(p => p.category === filter)

  const openProject = (index: number) => {
    setSelectedProject(index)
    setCurrentImage(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const showNext = () => {
    if (selectedProject !== null) {
      const gallery = filteredProjects[selectedProject].gallery
      setCurrentImage((currentImage + 1) % gallery.length)
    }
  }

  const showPrev = () => {
    if (selectedProject !== null) {
      const gallery = filteredProjects[selectedProject].gallery
      setCurrentImage((currentImage - 1 + gallery.length) % gallery.length)
    }
  }

  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Nos réalisations</h2>
        <p className="text-muted mt-2">Filtrez par catégorie pour découvrir nos projets</p>
      </div>

      {/* Filters */}
      <div className="mb-10">
        <div className="sm:hidden relative w-full max-w-xs mx-auto">
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white text-gray-800 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute top-3 right-4 text-gray-500">▼</div>
        </div>

        <div className="hidden sm:flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition border shadow-sm ${
                filter === cat ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg"
            onClick={() => openProject(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold font-heading text-primary">{project.title}</h3>
              <p className="text-sm text-muted italic">{project.location}</p>
              <p className="text-sm text-gray-600 mt-2">{project.shortDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Transition show={selectedProject !== null}>
        <Dialog onClose={closeModal} className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white max-w-4xl w-full rounded-xl overflow-hidden shadow-xl relative">
              {selectedProject !== null && (
                <div className="relative">
                  <Image
                    src={filteredProjects[selectedProject].gallery[currentImage]}
                    alt="Aperçu projet"
                    width={1200}
                    height={800}
                    className="w-full max-h-[80vh] object-cover"
                  />
                  {/* Controls */}
                  <button onClick={closeModal} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                    <X size={20} />
                  </button>
                  <button onClick={showPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={showNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                    <ChevronRight size={20} />
                  </button>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-heading text-primary mb-1">
                      {filteredProjects[selectedProject].title}
                    </h3>
                    <p className="text-sm text-muted italic mb-2">
                      {filteredProjects[selectedProject].location}
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {filteredProjects[selectedProject].fullDescription}
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