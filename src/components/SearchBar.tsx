import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations, propertyTypes } from "@/data/properties";

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

export function SearchBar() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<"vente" | "location">("vente");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void navigate({
          to: "/properties",
          search: {
            transaction,
            location: location || undefined,
            type: type || undefined,
            maxPrice: budget ? Number(budget) : undefined,
          },
        });
      }}
      className="rounded-2xl border border-border bg-card p-4 shadow-card sm:p-5"
    >
      <div className="inline-flex rounded-xl bg-secondary p-1">
        {(["vente", "location"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setTransaction(value)}
            className={
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors " +
              (transaction === value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {value === "vente" ? "Acheter" : "Louer"}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Localisation
          </span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            Type de bien
          </span>
          <select value={type} onChange={(e) => setType(e.target.value)} className={fieldClass}>
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
            Budget maximum
          </span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            placeholder="Ex. 500 000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={fieldClass}
          />
        </label>

        <div className="flex items-end">
          <Button type="submit" size="lg" className="h-11 w-full">
            <Search className="h-4 w-4" />
            Rechercher
          </Button>
        </div>
      </div>
    </form>
  );
}