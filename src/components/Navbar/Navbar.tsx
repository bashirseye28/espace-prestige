"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/90 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-24 py-4">
        {/* Logo + Texte */}
        <motion.div
          whileHover={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.6 }}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759700891/NEWEspace_Prestige_pth0mv.png"
              alt="Logo Espace Prestige"
              width={100}
              height={40}
              className="h-auto w-16 sm:w-20 transition-all"
              priority
            />
            {/* Texte visible sur toutes tailles */}
            <span className="text-white uppercase text-sm sm:text-base md:text-lg font-bold tracking-wide ml-2 hover:text-accent transition">
              Espace Prestige
            </span>
          </Link>
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
            className="ml-6 px-5 py-2 bg-accent text-white uppercase text-sm hover:opacity-90 transition rounded-md"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white"
            aria-label="Ouvrir menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-[#8F5FBF]/95 backdrop-blur-2xl px-6 pt-8 pb-10 flex flex-col justify-start items-start space-y-8 text-white md:hidden"
          >
            {/* Close Button */}
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Logo + Texte dans menu mobile */}
            <div className="flex items-center space-x-3">
              <Image
                src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759700891/NEWEspace_Prestige_pth0mv.png"
                alt="Logo Espace Prestige"
                width={70}
                height={30}
                className="h-auto w-14 transition-all"
                priority
              />
              <span className="text-white uppercase text-lg font-bold tracking-wide">
                Espace Prestige
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col w-full space-y-5 text-base font-heading uppercase tracking-wider mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/90 hover:text-white transition text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/demande-devis"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-white text-primary text-center py-3 rounded-xl font-semibold uppercase tracking-wide hover:bg-primary hover:text-white transition"
            >
              Demander un devis
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}