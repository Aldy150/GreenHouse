import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations, propertyTypes } from "@/data/properties";

export interface Filters {
  transaction: "all" | "vente" | "location";
  location: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  minArea: string;
}

export const emptyFilters: Filters = {
  transaction: "all",
  location: "",
  type: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  minArea: "",
};

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

interface FilterPanelProps {
  value: Filters;
  onChange: (filters: Filters) => void;
  onApply: () => void;
  onReset: () => void;
}

export function FilterPanel({ value, onChange, onApply, onReset }: FilterPanelProps) {
  const set = (patch: Partial<Filters>) => onChange({ ...value, ...patch });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onApply();
      }}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
        <SlidersHorizontal className="h-4 w-4 text-primary" />
        Filtres
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Transaction
          </span>
          <select
            value={value.transaction}
            onChange={(e) => set({ transaction: e.target.value as Filters["transaction"] })}
            className={fieldClass}
          >
            <option value="all">Acheter ou louer</option>
            <option value="vente">Acheter</option>
            <option value="location">Louer</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Localisation
          </span>
          <select
            value={value.location}
            onChange={(e) => set({ location: e.target.value })}
            className={fieldClass}
          >
            <option value="">Toutes les villes</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Type de propriété
          </span>
          <select
            value={value.type}
            onChange={(e) => set({ type: e.target.value })}
            className={fieldClass}
          >
            <option value="">Tous les types</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Prix minimum
          </span>
          <input
            type="number"
            min={0}
            placeholder="0"
            value={value.minPrice}
            onChange={(e) => set({ minPrice: e.target.value })}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Prix maximum
          </span>
          <input
            type="number"
            min={0}
            placeholder="Sans limite"
            value={value.maxPrice}
            onChange={(e) => set({ maxPrice: e.target.value })}
            className={fieldClass}
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Chambres</span>
            <select
              value={value.bedrooms}
              onChange={(e) => set({ bedrooms: e.target.value })}
              className={fieldClass}
            >
              <option value="">Indifférent</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Surface min.
            </span>
            <input
              type="number"
              min={0}
              placeholder="m²"
              value={value.minArea}
              onChange={(e) => set({ minArea: e.target.value })}
              className={fieldClass}
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="h-11">
          Appliquer les filtres
        </Button>
        <Button type="button" size="lg" variant="outline" className="h-11" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
          Réinitialiser
        </Button>
      </div>
    </form>
  );
}