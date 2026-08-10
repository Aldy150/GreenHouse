import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const title = "Contact — GreenHome Immobilier";
const description =
  "Contactez GreenHome Immobilier : adresse, téléphone, email, horaires et formulaire pour parler de votre projet immobilier.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "GreenHome Immobilier",
          telephone: "+33 1 84 21 45 10",
          email: "contact@greenhome.fr",
          address: {
            "@type": "PostalAddress",
            streetAddress: "18 rue des Tilleuls",
            postalCode: "75009",
            addressLocality: "Paris",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="container-page py-14 lg:py-20">
          <h1 className="text-4xl text-foreground sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Une question, un projet ou une demande d'estimation ? Notre équipe vous répond sous 24
            heures.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl text-foreground">Informations</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">18 rue des Tilleuls, 75009 Paris</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+33184214510" className="text-muted-foreground hover:text-primary">
                  +33 1 84 21 45 10
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:contact@greenhome.fr"
                  className="text-muted-foreground hover:text-primary"
                >
                  contact@greenhome.fr
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Lundi — vendredi : 9h00 – 19h00
                  <br />
                  Samedi : 10h00 – 17h00
                  <br />
                  Dimanche : fermé
                </span>
              </li>
            </ul>
          </div>

          <div className="grid h-64 place-items-center rounded-2xl border border-dashed border-border bg-secondary text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Carte — 18 rue des Tilleuls, Paris
            </span>
          </div>
        </div>

        <ContactForm title="Parlons de votre projet" />
      </section>
    </>
  );
}