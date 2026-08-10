import { SearchX } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import type { Property } from "@/data/properties";

interface PropertyGridProps {
  properties: Property[];
  loading?: boolean;
}

export function PropertyGrid({ properties, loading = false }: PropertyGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[4/3] animate-pulse bg-muted" />
            <div className="space-y-3 p-5">
              <div className="h-5 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-secondary/60 px-6 py-16 text-center">
        <SearchX className="mx-auto h-8 w-8 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Aucun bien ne correspond</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Essayez d'élargir vos critères de recherche ou réinitialisez les filtres.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}