'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4">
        {/* Logo + Title */}
        <motion.div
          whileHover={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.6 }}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          className="flex items-center"
        >
          <Link href="/">
            <Image
              // src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1752637147/logoPrestige_wfuolz.png"
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1758946816/Espace_Prestige_ctey7f.png"
              alt="Logo Espace Prestige"
              width={120}
              height={40}
              className="h-auto transition-all duration-300"
            />
          </Link>
          <span className="hidden md:block text-white text-sm font-semibold tracking-wide ml-2">
            Espace Prestige
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-10 text-white uppercase text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/demande-devis"
            className="ml-6 px-5 py-2 bg-accent text-white uppercase text-sm hover:opacity-90 transition"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white"
            aria-label="Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#8F5FBF]/90 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Fermer"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 mt-6 text-left text-base uppercase font-heading tracking-wide text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-5 py-3 bg-primary text-white text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-primary transition w-full text-center"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Note: Ensure you have the necessary dependencies installed for this code to work:
