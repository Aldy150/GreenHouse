import { Link } from "@tanstack/react-router";
import { Facebook, Home, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/properties", label: "Nos biens" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Achat immobilier",
  "Vente immobilière",
  "Location",
  "Gestion locative",
  "Estimation",
  "Investissement",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Home className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg font-semibold">GreenHouse</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Agence immobilière indépendante spécialisée dans l'accompagnement des acheteurs,
            vendeurs, propriétaires et investisseurs.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social GreenHome"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>72 avenue de la paix Moungali, Brazzaville</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+33184214510" className="hover:text-primary">
                +242 06 890 12 34
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:contact@greenhome.fr" className="hover:text-primary">
                contact@greenhouse.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GreenHouse Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}