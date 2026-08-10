import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

interface ContactFormProps {
  title?: string;
  submitLabel?: string;
  variant?: "full" | "compact";
}

export function ContactForm({
  title,
  submitLabel = "Envoyer ma demande",
  variant = "full",
}: ContactFormProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      {title ? <h2 className="text-xl text-foreground">{title}</h2> : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Nom complet
          </span>
          <input required name="name" className={fieldClass} placeholder="Marie Dupont" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</span>
          <input
            required
            type="email"
            name="email"
            className={fieldClass}
            placeholder="marie@email.fr"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Téléphone</span>
          <input type="tel" name="phone" className={fieldClass} placeholder="06 12 34 56 78" />
        </label>

        {variant === "full" ? (
          <>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Sujet</span>
              <input name="subject" className={fieldClass} placeholder="Votre demande" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Type de projet
              </span>
              <select name="project" className={fieldClass} defaultValue="">
                <option value="">Sélectionner</option>
                <option value="achat">Achat</option>
                <option value="vente">Vente</option>
                <option value="location">Location</option>
                <option value="gestion">Gestion locative</option>
                <option value="estimation">Estimation</option>
                <option value="investissement">Investissement</option>
              </select>
            </label>
          </>
        ) : null}

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
            placeholder="Décrivez votre projet en quelques lignes…"
          />
        </label>
      </div>

      <Button type="submit" size="lg" className="mt-5 h-11 w-full sm:w-auto">
        {submitLabel}
      </Button>

      {sent ? (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Merci, votre demande a bien été prise en compte. Nous vous recontactons sous 24 h.
        </p>
      ) : null}
    </form>
  );
}