'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-heading mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" />
              <span>123 Rue de l’Excellence, Paris</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={18} className="mt-0.5" />
              <a href="tel:+33123456789" className="hover:text-accent transition">
                +33 1 23 45 67 89
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-0.5" />
              <a
                href="mailto:contact@espaceprestige.com"
                className="hover:text-accent transition"
              >
                contact@espaceprestige.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-heading mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li>
              <Link href="/" className="hover:text-accent transition">Accueil</Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-accent transition">À propos</Link>
            </li>
            <li>
              <Link href="/projets" className="hover:text-accent transition">Projets</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-heading mb-4">Suivez-nous</h3>
          <div className="flex items-center gap-5">
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
              href="https://www.instagram.com/espaceprestige.ep/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/espaceprestige"
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

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 px-4 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Espace Prestige. Tous droits réservés.</p>
        <motion.a
          whileHover={{ y: -4 }}
          href="#"
          className="flex items-center gap-1 hover:text-accent transition"
        >
          <ArrowUp size={16} />
          Retour en haut
        </motion.a>
      </div>
    </footer>
  )
}