'use client'

import { Linkedin, Instagram, Facebook } from 'lucide-react'

export default function SocialLinks() {
  return (
    <section className="bg-lavender py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
          Suivez-nous sur les réseaux
        </h3>

        <p className="text-muted mb-8">
          Rejoignez notre communauté et découvrez nos dernières réalisations, projets en cours et inspirations architecturales.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/company/espaceprestige"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white p-3 rounded-full shadow-md hover:text-accent hover:shadow-lg transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/espaceprestige.ep/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-white p-3 rounded-full shadow-md hover:text-accent hover:shadow-lg transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/Espaceprestige.ep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-white p-3 rounded-full shadow-md hover:text-accent hover:shadow-lg transition"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}