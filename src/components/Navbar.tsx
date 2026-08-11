import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/properties", label: "Nos biens" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Verrouille le scroll uniquement sur mobile lorsque le tiroir est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <nav className="container-page flex h-18 items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Home className="h-4.5 w-4.5" />
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              Green<span className="text-primary">House</span>
            </span>
          </Link>

          {/* Navigation Horizontale classique (Grand écran uniquement) */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary font-semibold" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bouton d'action (Grand écran uniquement) */}
          <div className="hidden lg:block">
            <Button asChild size="lg">
              <Link to="/properties">Voir nos biens</Link>
            </Button>
          </div>

          {/* Bouton Hamburger (Ecran mobile/tablette uniquement) */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Backdrop sombre (Masqué sur grand écran `lg:hidden`) */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Tiroir coulissant (Uniquement sur mobile lors de l'ouverture) */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden sm:max-w-sm ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Entête du tiroir mobile */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Home className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-semibold">
              Green<span className="text-primary">House</span>
            </span>
          </div>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Liens de navigation mobile */}
        <div className="flex-1 overflow-y-auto py-6">
          {/*<p className="px-2 pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Navigation
          </p> */}
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-primary/10 text-primary font-semibold" }}
                className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-medium text-foreground transition-all hover:bg-secondary"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Pied de page du menu mobile */}
        <div className="border-t border-border pt-4">
          <Button asChild size="lg" className="w-full rounded-xl">
            <Link to="/properties" onClick={() => setOpen(false)}>
              Voir nos biens
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
}