import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bath, BedDouble, Check, Heart, MapPin, Maximize, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyBadge } from "@/components/PropertyCard";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";
import { formatPrice, getProperty } from "@/data/properties";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = getProperty(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Bien introuvable — GreenHome" }, { name: "robots", content: "noindex" }] };
    }
    const { property } = loaderData;
    const title = `${property.title} — ${property.location} | GreenHome`;
    const description = property.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/properties/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/properties/${params.id}` }],
    };
  },
  notFoundComponent: PropertyNotFound,
  component: PropertyDetail,
});

function PropertyNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl text-foreground">Ce bien n'est plus disponible</h1>
      <p className="mt-3 text-muted-foreground">
        Il a peut-être été vendu ou loué. Découvrez nos autres propriétés.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link to="/properties">Voir tous les biens</Link>
      </Button>
    </div>
  );
}

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="container-page py-12">
      <nav className="text-sm text-muted-foreground">
        <Link to="/properties" className="transition-colors hover:text-primary">
          Nos biens
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{property.title}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <PropertyGallery images={property.images} title={property.title} />

          <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <PropertyBadge transactionType={property.transactionType} />
              <h1 className="mt-3 text-3xl text-foreground sm:text-4xl">{property.title}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {property.location}
              </p>
            </div>
            <p className="font-display text-3xl font-semibold text-primary">
              {formatPrice(property)}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-secondary p-5 sm:grid-cols-4">
            <Feature icon={<Maximize className="h-4 w-4" />} label="Surface" value={`${property.area} m²`} />
            <Feature icon={<BedDouble className="h-4 w-4" />} label="Chambres" value={String(property.bedrooms)} />
            <Feature icon={<Bath className="h-4 w-4" />} label="Salles de bain" value={String(property.bathrooms)} />
            <Feature icon={<Check className="h-4 w-4" />} label="Type" value={property.type} />
          </div>

          <section className="mt-10">
            <h2 className="text-xl text-foreground">Description</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{property.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl text-foreground">Caractéristiques & équipements</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {property.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl text-foreground">Localisation</h2>
            <div className="mt-4 grid h-64 place-items-center rounded-2xl border border-dashed border-border bg-secondary text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Carte — {property.location}
              </span>
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Votre conseiller
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">
                {property.agent.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-foreground">{property.agent.name}</p>
                <p className="truncate text-sm text-muted-foreground">{property.agent.role}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`tel:${property.agent.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" /> {property.agent.phone}
              </a>
              <a
                href={`mailto:${property.agent.email}`}
                className="flex items-center gap-2 truncate text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" /> {property.agent.email}
              </a>
            </div>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setFavorite((v) => !v)}
              aria-pressed={favorite}
              className="mt-5 w-full"
            >
              <Heart className={cn("h-4 w-4", favorite && "fill-primary text-primary")} />
              {favorite ? "Retiré des favoris" : "Ajouter aux favoris"}
            </Button>
          </div>

          <ContactForm
            title="Intéressé par ce bien ?"
            submitLabel="Demander une visite"
            variant="compact"
          />
        </aside>
      </div>
    </div>
  );
}

function Feature({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      <p className="mt-1 font-semibold text-foreground">{value}</p>
    </div>
  );
}