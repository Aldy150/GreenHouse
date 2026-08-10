import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FilterPanel, emptyFilters, type Filters } from "@/components/FilterPanel";
import { PropertyGrid } from "@/components/PropertyGrid";
import { properties } from "@/data/properties";

interface PropertiesSearch {
  transaction?: "vente" | "location" | undefined;
  location?: string | undefined;
  type?: string | undefined;
  maxPrice?: number | undefined;
}

const title = "Nos propriétés  GreenHouse";
const description =
  "Explorez notre sélection de biens disponibles à la vente et à la location : villas, appartements, maisons et penthouses.";

export const Route = createFileRoute("/properties/")({
  validateSearch: (search: Record<string, unknown>): PropertiesSearch => ({
    transaction:
      search["transaction"] === "vente" || search["transaction"] === "location"
        ? search["transaction"]
        : undefined,
    location: typeof search["location"] === "string" ? search["location"] : undefined,
    type: typeof search["type"] === "string" ? search["type"] : undefined,
    maxPrice: Number(search["maxPrice"]) > 0 ? Number(search["maxPrice"]) : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

const PAGE_SIZE = 6;

function matches(filters: Filters) {
  return properties.filter((property) => {
    if (filters.transaction !== "all" && property.transactionType !== filters.transaction)
      return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
    if (filters.bedrooms && property.bedrooms < Number(filters.bedrooms)) return false;
    if (filters.minArea && property.area < Number(filters.minArea)) return false;
    return true;
  });
}

function PropertiesPage() {
  const search = Route.useSearch();
  const initial: Filters = {
    ...emptyFilters,
    transaction: search.transaction ?? "all",
    location: search.location ?? "",
    type: search.type ?? "",
    maxPrice: search.maxPrice ? String(search.maxPrice) : "",
  };

  const [draft, setDraft] = useState<Filters>(initial);
  const [applied, setApplied] = useState<Filters>(initial);
  const [page, setPage] = useState(1);

  const results = useMemo(() => matches(applied), [applied]);
  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const current = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="container-page py-14 lg:py-20">
          <h1 className="text-4xl text-foreground sm:text-5xl">Nos propriétés</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explorez notre sélection de biens disponibles à la vente et à la location.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <FilterPanel
          value={draft}
          onChange={setDraft}
          onApply={() => {
            setApplied(draft);
            setPage(1);
          }}
          onReset={() => {
            setDraft(emptyFilters);
            setApplied(emptyFilters);
            setPage(1);
          }}
        />

        <p className="mt-8 text-sm text-muted-foreground">
          {results.length} bien{results.length > 1 ? "s" : ""} disponible
          {results.length > 1 ? "s" : ""}
        </p>

        <div className="mt-6">
          <PropertyGrid properties={current} />
        </div>

        {results.length > PAGE_SIZE ? (
          <nav
            aria-label="Pagination des propriétés"
            className="mt-12 flex items-center justify-center gap-2"
          >
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Précédent
            </Button>
            {Array.from({ length: pageCount }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={page === i + 1 ? "default" : "outline"}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              disabled={page === pageCount}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              Suivant
            </Button>
          </nav>
        ) : null}
      </section>
    </>
  );
}