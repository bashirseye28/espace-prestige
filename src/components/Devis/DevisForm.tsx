'use client'

import { motion } from 'framer-motion'

export default function DevisForm() {
  return (
    <section className="bg-white py-24 px-4 sm:px-10 lg:px-32 text-text">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary text-center mb-4"
        >
          Demande de devis
        </motion.h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-10" />

        <form className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="email@exemple.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Téléphone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="+221 77 123 45 67"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Type de projet</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                required
              >
                <option>Construction</option>
                <option>Rénovation</option>
                <option>Architecture</option>
                <option>Urbanisme</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Votre message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                rows={6}
                placeholder="Décrivez votre projet, vos attentes, votre budget estimé..."
              />
            </div>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition font-medium"
            >
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}