import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Travaux de construction",
    text: "Réalisation d’ouvrages résidentiels avec une exécution soignée, du gros œuvre aux finitions.",
  },
  {
    title: "Promotion immobilière",
    text: "Conception et développement de biens résidentiels pensés pour la vie à Bizerte et en Tunisie.",
  },
  {
    title: "Projets sur mesure",
    text: "Accompagnement de A à Z — de la première esquisse jusqu’à la remise des clés.",
  },
];

const steps = [
  {
    n: "01",
    title: "Écoute & conception",
    text: "Nous clarifions vos besoins, le terrain et le budget pour poser des fondations solides.",
  },
  {
    n: "02",
    title: "Exécution maîtrisée",
    text: "Chantier suivi, méthodes modernes et exigence constante sur la qualité des ouvrages.",
  },
  {
    n: "03",
    title: "Livraison fiable",
    text: "Remise d’un bien durable — avec la même fidélité que porte notre nom, El Wafa.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="hero-atmosphere grain relative min-h-[100svh] overflow-hidden text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wafa-ink via-wafa-ink/80 to-wafa-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-wafa-ink via-transparent to-wafa-ink/45" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-end px-5 pb-16 pt-28 md:items-center md:px-8 md:pb-20 md:pt-24">
            <div className="max-w-xl">
              <div className="animate-rise relative mb-8 h-16 w-[220px] md:h-20 md:w-[280px]">
                <Image
                  src="/logo-wafa.png"
                  alt="WAFA BATIMENT"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="280px"
                />
              </div>

              <h1 className="font-display animate-rise-delay-1 text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[0.95] tracking-tight">
                Construire
                <span className="block text-wafa-red-soft">avec fidélité</span>
              </h1>

              <div className="animate-line mt-6 h-px w-24 bg-wafa-red" />

              <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                Construction et promotion immobilière résidentielle à Bizerte —
                la confiance d’une entreprise familiale depuis 2016.
              </p>

              <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-wafa-red px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-wafa-red-deep"
                >
                  Nous contacter
                </a>
                <a
                  href="#services"
                  className="border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 transition hover:border-white/60 hover:bg-white/5"
                >
                  Nos services
                </a>
              </div>
            </div>
          </div>

          <p className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.22em] text-white/40 md:left-8">
            Bizerte · Tunisie
          </p>
        </section>

        {/* ABOUT */}
        <section id="apropos" className="section-band relative py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wafa-red">
                À propos
              </p>
                  <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-wafa-ink md:text-5xl">
                El Wafa —
                <span className="block text-wafa-steel">la fidélité</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-wafa-slate">
              <p>
                Société El Wafa de Bâtiment est une entreprise familiale
                tunisienne spécialisée dans la construction et la promotion
                immobilière résidentielle. Depuis 2016, nous accompagnons nos
                clients à chaque étape de leur projet — de la conception à la
                livraison — avec une exigence constante de qualité, de sérieux et
                de fiabilité.
              </p>
              <p>
                Notre nom, El Wafa (la fidélité), reflète l’engagement que nous
                portons envers chaque client et chaque projet. Basés à Bizerte,
                nous concevons et réalisons des biens résidentiels sur mesure, en
                alliant savoir-faire traditionnel et méthodes de construction
                modernes.
              </p>
              <dl className="grid grid-cols-2 gap-6 border-t border-wafa-mist pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    Fondée
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold text-wafa-ink">
                    2016
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    Siège
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold text-wafa-ink">
                    Bizerte
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    Forme
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold text-wafa-ink">
                    SARL
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-wafa-ink py-24 text-white md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wafa-red-soft">
                Services
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Ce que nous bâtissons
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Une structure à taille humaine, un seul métier : livrer des
                projets résidentiels solides et durables.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-3">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="bg-wafa-ink p-8 transition hover:bg-white/[0.03] md:p-10"
                >
                  <span className="font-display text-sm font-bold text-wafa-red-soft">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approche" className="bg-wafa-cloud py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wafa-red">
                Approche
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-wafa-ink md:text-5xl">
                De l’idée aux clés
              </h2>
            </div>

            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <li key={step.n} className="relative">
                  <span className="font-display text-5xl font-extrabold text-wafa-red/15">
                    {step.n}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold text-wafa-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-wafa-slate">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wafa-red">
                Contact
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-wafa-ink md:text-5xl">
                Parlons de votre projet
              </h2>
              <p className="mt-5 text-base leading-relaxed text-wafa-slate">
                Une question, un terrain, une idée de construction ? Écrivez-nous —
                nous vous répondons rapidement.
              </p>

              <div className="mt-10 space-y-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    Email
                  </p>
                  <a
                    href="mailto:alislimia01@gmail.com"
                    className="mt-2 inline-block text-lg font-medium text-wafa-ink underline decoration-wafa-red/40 underline-offset-4 transition hover:decoration-wafa-red"
                  >
                    alislimia01@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    Siège social
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-wafa-slate">
                    14 Avenue 14 Janvier
                    <br />
                    Immeuble Ed-Dahesh, 3<sup>e</sup> étage
                    <br />
                    Bizerte Nord, 7000 Bizerte, Tunisie
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-wafa-steel">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/company/société-el-wafa-de-bâtiment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-base font-medium text-wafa-ink underline decoration-wafa-red/40 underline-offset-4 transition hover:decoration-wafa-red"
                  >
                    Société El Wafa de Bâtiment
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-wafa-mist pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-wafa-ink py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="relative h-10 w-[140px]">
            <Image
              src="/logo-wafa.png"
              alt="WAFA BATIMENT"
              fill
              className="object-contain object-left"
              sizes="140px"
            />
          </div>
          <p className="text-xs leading-relaxed text-white/45">
            © {new Date().getFullYear()} Société El Wafa de Bâtiment · SARL ·
            Identifiant unique 1438793F · Bizerte, Tunisie
          </p>
        </div>
      </footer>
    </>
  );
}
