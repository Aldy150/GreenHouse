import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container-page py-20">
      <div className="rounded-3xl bg-primary px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
          Prêt à trouver votre prochain bien ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
          Parlons de votre projet immobilier et trouvons ensemble la propriété qui vous correspond.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link to="/properties">Trouver un bien</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/contact">Prendre contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}