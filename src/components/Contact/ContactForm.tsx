'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24 text-text">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center text-primary">
          Nous contacter
        </h2>
        <p className="text-center text-muted mb-10">
          Une question, un projet ? Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus('success')
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                Adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-muted mb-1">
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary hover:bg-accent text-white font-medium px-8 py-3 rounded-xl uppercase tracking-wider transition duration-200"
            >
              Envoyer le message
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-4">Votre message a bien été envoyé !</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}