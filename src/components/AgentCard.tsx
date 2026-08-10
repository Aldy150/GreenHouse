import { Mail, Phone } from "lucide-react";
import type { Agent } from "@/data/properties";

export function AgentCard({ agent, speciality }: { agent: Agent; speciality: string }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="grid aspect-[4/3] place-items-center bg-accent">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-background font-display text-2xl font-semibold text-primary">
          {agent.initials}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-foreground">{agent.name}</h3>
        <p className="mt-1 text-sm text-primary">{agent.role}</p>
        <p className="mt-2 text-sm text-muted-foreground">Spécialité : {speciality}</p>
        <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm">
          <a
            href={`tel:${agent.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" /> {agent.phone}
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-2 truncate text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" /> {agent.email}
          </a>
        </div>
      </div>
    </article>
  );
}