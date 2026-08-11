import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  Eye,
  Handshake,
  Home as HomeIcon,
  KeyRound,
  MapPinned,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";
import { PropertyGrid } from "@/components/PropertyGrid";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { properties } from "@/data/properties";

const title = "GreenHouse Votre prochain chez-vous commence ici";
const description =
  "Agence immobilière premium : biens sélectionnés à la vente et à la location, accompagnement personnalisé et transparence à chaque étape.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const advantages = [
  {
    icon: MapPinned,
    title: "Expertise locale",
    text: "Une connaissance approfondie du marché immobilier local.",
  },
  {
    icon: Sparkles,
    title: "Biens sélectionnés",
    text: "Des propriétés choisies selon des critères de qualité stricts.",
  },
  {
    icon: UserRoundCheck,
    title: "Accompagnement personnalisé",
    text: "Un conseiller dédié pour vous accompagner à chaque étape.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence",
    text: "Des informations claires et un processus immobilier sans mauvaises surprises.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Définissez votre projet",
    text: "Nous cernons vos besoins, votre budget et vos priorités.",
  },
  {
    icon: HomeIcon,
    title: "Trouvez votre bien",
    text: "Une sélection de propriétés réellement adaptées à votre recherche.",
  },
  {
    icon: Eye,
    title: "Visitez la propriété",
    text: "Des visites organisées et commentées par votre conseiller.",
  },
  {
    icon: KeyRound,
    title: "Finalisez votre projet",
    text: "Un suivi complet jusqu'à la remise des clés.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Claire & Antoine",
    city: "Brazzaville",
    initials: "CA",
    quote:
      "GreenHouse nous a accompagnés du début à la fin. Nous avons trouvé notre maison en quelques semaines seulement.",
  },
  {
    name: "Sophie Berger",
    city: "Pointe-Noire",
    initials: "SB",
    quote:
      "Une équipe disponible et honnête. Chaque étape a été expliquée clairement, sans jamais aucune pression.",
  },
  {
    name: "Marc Delaunay",
    city: "Dolisie",
    initials: "MD",
    quote:
      "J'ai vendu mon appartement au prix espéré en un mois. Les conseils d'estimation étaient parfaitement justes.",
  },
];

function Index() {
  const featured = properties.slice(0, 6);

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="container-page grid items-center gap-12 pt-16 pb-14 lg:grid-cols-2 lg:pt-20">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Handshake className="h-3.5 w-3.5" />
              Agence indépendante depuis 2013
            </span>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Votre prochain chez-vous commence ici.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Découvrez des propriétés sélectionnées avec soin et trouvez le bien qui correspond
              réellement à votre projet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-7">
                <Link to="/properties">Voir les propriétés</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Belle maison contemporaine avec jardin au coucher du soleil"
              width={1400}
              height={1200}
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>

        <div className="container-page pb-16">
          <SearchBar />
        </div>
      </section>

      <StatsSection />

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Sélection"
          title="Nos biens sélectionnés"
          subtitle="Une sélection resserrée de propriétés disponibles à la vente et à la location."
        />
        <div className="mt-12">
          <PropertyGrid properties={featured} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link to="/properties">
              Voir tous les biens
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nos engagements"
            title="Pourquoi nous choisir ?"
            subtitle="Un accompagnement exigeant, du premier échange à la signature."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Méthode"
          title="Comment ça marche ?"
          subtitle="Un parcours simple et balisé en quatre étapes."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-border p-6">
              <span className="font-display text-4xl font-semibold text-accent">
                0{index + 1}
              </span>
              <step.icon className="mt-4 h-5 w-5 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ils nous ont fait confiance"
            subtitle="Ce que nos clients disent de leur expérience avec GreenHouse."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
