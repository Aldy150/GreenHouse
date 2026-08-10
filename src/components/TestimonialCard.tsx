import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  city: string;
  initials: string;
  quote: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-card">
      <div className="flex gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        « {testimonial.quote} »
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
          {testimonial.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-foreground">
            {testimonial.name}
          </span>
          <span className="block truncate text-xs text-muted-foreground">{testimonial.city}</span>
        </span>
      </figcaption>
    </figure>
  );
}