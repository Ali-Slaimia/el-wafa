"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Nouveau message — WAFA BATIMENT");
    data.append("_template", "table");
    data.append("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/alislimia01@gmail.com",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );

      if (!res.ok) throw new Error("Envoi impossible");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "L’envoi a échoué. Écrivez-nous directement à alislimia01@gmail.com.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-wafa-steel">
            Nom
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border-0 border-b border-wafa-mist bg-transparent px-0 py-3 text-wafa-ink outline-none transition focus:border-wafa-red"
            placeholder="Votre nom"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-wafa-steel">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border-0 border-b border-wafa-mist bg-transparent px-0 py-3 text-wafa-ink outline-none transition focus:border-wafa-red"
            placeholder="vous@exemple.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-wafa-steel">
          Téléphone
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full border-0 border-b border-wafa-mist bg-transparent px-0 py-3 text-wafa-ink outline-none transition focus:border-wafa-red"
          placeholder="+216 …"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-wafa-steel">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y border-0 border-b border-wafa-mist bg-transparent px-0 py-3 text-wafa-ink outline-none transition focus:border-wafa-red"
          placeholder="Parlez-nous de votre projet…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center bg-wafa-red px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-wafa-red-deep disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? "Envoi…" : "Envoyer le message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-wafa-slate">
            Merci — votre message a bien été envoyé.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-wafa-red">{error}</p>
        )}
      </div>
    </form>
  );
}
