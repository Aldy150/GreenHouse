const stats = [
  { value: "500+", label: "Biens disponibles" },
  { value: "12+", label: "Années d'expérience" },
  { value: "1 200+", label: "Clients satisfaits" },
  { value: "25", label: "Experts immobiliers" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="container-page grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}