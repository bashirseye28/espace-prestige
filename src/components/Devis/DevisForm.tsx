"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DevisForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-24 px-4 sm:px-10 lg:px-32 text-text">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold text-primary text-center mb-3"
        >
          Demande de devis
        </motion.h2>
        <p className="text-center text-muted mb-8">
          Vous avez un projet ? Remplissez le formulaire ci-dessous, notre
          équipe vous contactera rapidement.
        </p>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-10" />

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Input
              label="Nom complet"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="email@exemple.com"
              required
            />
            <Input
              label="Téléphone"
              type="tel"
              name="phone"
              placeholder="+221 77 123 45 67"
            />
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-muted mb-1"
              >
                Fichier(s) du projet{" "}
                <span className="text-xs text-gray-400">(optionnel)</span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                multiple
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="project"
                className="block text-sm font-medium text-muted mb-1"
              >
                Type de projet
              </label>
              <select
                id="project"
                name="project"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="">Sélectionnez un type</option>
                <option>Construction</option>
                <option>Rénovation</option>
                <option>Architecture</option>
                <option>Urbanisme</option>
                <option>Autre</option>
              </select>
            </div>
            {/* <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-muted mb-1"
              >
                Budget estimé
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                placeholder="Ex : 10 000 000 FCFA"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div> */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted mb-1"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Décrivez votre projet, vos attentes, votre budget estimé..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                required
                id="rgpd"
                className="mt-1 mr-2 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="rgpd" className="text-sm text-muted">
                J’accepte que mes données soient utilisées dans le cadre de ma
                demande.
              </label>
            </div>
          </div>

          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition font-medium"
            >
              Envoyer la demande
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-4">
                Votre demande a bien été envoyée. Nous vous répondrons
                rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-4">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-muted mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
  );
}
