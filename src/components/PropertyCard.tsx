import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Bath, BedDouble, Heart, MapPin, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice, type Property } from "@/data/properties";

export function PropertyBadge({ transactionType }: { transactionType: Property["transactionType"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur",
        transactionType === "vente"
          ? "bg-primary/95 text-primary-foreground"
          : "bg-background/95 text-primary",
      )}
    >
      {transactionType === "vente" ? "À vendre" : "À louer"}
    </span>
  );
}

export function PropertyCard({ property }: { property: Property }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={`${property.title} — ${property.location}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <PropertyBadge transactionType={property.transactionType} />
        </div>
        <button
          type="button"
          aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          aria-pressed={favorite}
          onClick={() => setFavorite((v) => !v)}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <Heart
            className={cn("h-4 w-4 transition-colors", favorite && "fill-primary text-primary")}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xl font-semibold text-primary">{formatPrice(property)}</p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug text-foreground">
          {property.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-primary" /> {property.bedrooms} ch.
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-primary" /> {property.bathrooms} sdb
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-primary" /> {property.area} m²
          </span>
        </div>

        <Link
          to="/properties/$id"
          params={{ id: property.id }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          Voir le bien
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}