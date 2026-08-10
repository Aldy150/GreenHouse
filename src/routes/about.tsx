import { createFileRoute } from "@tanstack/react-router";
import { Handshake, HeartHandshake, Award, Eye } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AgentCard } from "@/components/AgentCard";
import { CTASection } from "@/components/CTASection";
import { agents, agentSpecialities } from "@/data/properties";
import houseImage from "@/assets/house.jpg";

const title = "À propos — GreenHome Immobilier";
const description =
  "GreenHome Immobilier accompagne acheteurs, vendeurs, propriétaires et investisseurs avec transparence, expertise et proximité.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Handshake, title: "Confiance", text: "Des engagements tenus et un discours toujours honnête." },
  { icon: Eye, title: "Transparence", text: "Chaque information utile est partagée, sans zone d'ombre." },
  { icon: Award, title: "Excellence", text: "Une exigence constante sur la qualité des biens et du service." },
  { icon: HeartHandshake, title: "Proximité", text: "Un interlocuteur unique, disponible et à l'écoute." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="container-page py-14 lg:py-20">
          <h1 className="text-4xl text-foreground sm:text-5xl">À propos de GreenHome</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Une agence moderne, à taille humaine, qui remet l'accompagnement au centre de
            l'immobilier.
          </p>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <img
          src={houseImage}
          alt="Maison familiale accompagnée par GreenHome Immobilier"
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
        />
        <div>
          <SectionHeading
            align="left"
            eyebrow="Notre histoire"
            title="Une agence née d'une conviction simple"
            subtitle="Depuis 2013, GreenHome Immobilier accompagne les acheteurs, vendeurs, propriétaires et investisseurs sur l'ensemble de leur projet. Nous avons construit une agence moderne, indépendante, où chaque dossier est suivi par un conseiller dédié."
          />
          <div className="mt-8 rounded-2xl border border-border bg-accent p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">
              Notre mission
            </h3>
            <p className="mt-2 font-display text-xl text-accent-foreground">
              Rendre l'immobilier plus simple, plus transparent et plus humain.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide notre travail" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Notre équipe"
          title="Des experts à vos côtés"
          subtitle="Quatre conseillers spécialisés pour couvrir tous les types de projets."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.email}
              agent={agent}
              speciality={agentSpecialities[index] ?? "Immobilier résidentiel"}
            />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}