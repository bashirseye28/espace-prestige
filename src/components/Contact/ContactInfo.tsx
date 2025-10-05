'use client'

import { Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24 text-text">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="hidden md:block">
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1752644125/2150666467_gyzw12.jpg"
            alt="Espace Prestige Dakar"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Right: Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
            Nous contacter
          </h2>

          <p className="text-muted mb-8 max-w-md">
            Notre équipe est à votre écoute pour concrétiser vos projets les plus ambitieux.
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <MapPin size={22} />
              </div>
              <span>Dakar, Sénégal</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Mail size={22} />
              </div>
              <a
                href="mailto:contact.espaceprestige@gmail.com"
                className="hover:text-accent transition"
              >
                contact@espaceprestigesenegal.com
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-10 flex gap-5 text-primary">
            <a
              href="https://www.instagram.com/espaceprestige.ep/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition"
            >
              <Instagram size={24} />
            </a>
            {/* <a
              href="https://www.linkedin.com/company/espaceprestige"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition"
            >
              <Linkedin size={24} />
            </a> */}
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
      </div>
    </section>
  )
}