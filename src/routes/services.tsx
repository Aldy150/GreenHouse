import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Calculator,
  Home,
  KeyRound,
  LineChart,
  Tag,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

const title = "Nos services immobiliers — GreenHome Immobilier";
const description =
  "Achat, vente, location, gestion locative, estimation et conseil en investissement : six services immobiliers pensés pour votre projet.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Achat immobilier",
    text: "Nous cadrons votre recherche, sélectionnons les biens pertinents et négocions pour vous.",
  },
  {
    icon: Tag,
    title: "Vente immobilière",
    text: "Estimation juste, mise en valeur professionnelle et diffusion ciblée de votre bien.",
  },
  {
    icon: KeyRound,
    title: "Location",
    text: "Recherche de locataires sérieux, visites organisées et dossiers vérifiés.",
  },
  {
    icon: Building2,
    title: "Gestion locative",
    text: "Quittances, entretien, relation locataire : nous gérons votre bien au quotidien.",
  },
  {
    icon: Calculator,
    title: "Estimation immobilière",
    text: "Une valorisation précise basée sur les données réelles du marché local.",
  },
  {
    icon: LineChart,
    title: "Conseil en investissement",
    text: "Rendement, fiscalité et potentiel : nous vous aidons à investir sereinement.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="container-page py-14 lg:py-20">
          <h1 className="text-4xl text-foreground sm:text-5xl">Nos services</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Un accompagnement complet, de la première estimation jusqu'à la remise des clés.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Accompagnement"
          title="Six expertises, un seul interlocuteur"
          subtitle="Chaque service est assuré par un conseiller spécialisé de l'agence."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <service.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}