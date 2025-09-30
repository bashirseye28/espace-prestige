'use client'

import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24 text-text">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
            Nos coordonnées
          </h2>
          <p className="text-muted mb-8 max-w-md">
            Que vous ayez un projet en tête ou une simple question, nous sommes là pour vous répondre avec attention et expertise.
          </p>

          <ul className="space-y-4 text-base">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={20} />
              <span>123 Rue de l’Excellence, Paris, France</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-primary mt-1" size={20} />
              <a href="tel:+33123456789" className="hover:text-accent transition">+33 1 23 45 67 89</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-primary mt-1" size={20} />
              <a href="mailto:contact.espaceprestige@gmail.com" className="hover:text-accent transition">
                contact.espaceprestige@gmail.com
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 flex gap-5 text-primary">
            <a
              href="https://www.instagram.com/espaceprestige.ep/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/espaceprestige"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/Espaceprestige.ep/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent transition"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Form or image will go in second column later */}
        <div />
      </div>
    </section>
  )
}