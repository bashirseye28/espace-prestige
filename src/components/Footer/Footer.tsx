'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowUp,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-primary text-white pt-20 pb-10 mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading mb-6 uppercase tracking-wide">Nous contacter</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5" />
                <a
                  href="mailto:contact@espaceprestigesenegal.com"
                  className="hover:text-accent transition"
                >
                  contact@espaceprestigesenegal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-heading mb-6 uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-4 text-sm text-white/90">
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
            <h3 className="text-lg font-heading mb-6 uppercase tracking-wide">Réseaux sociaux</h3>
            <div className="flex items-center gap-6">
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

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 px-4 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Espace Prestige. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-accent transition"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}