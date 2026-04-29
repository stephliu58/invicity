const cities = [
  { name: "London",   status: "Open",    year: "2026", active: true },
  { name: "New York", status: "Opening", year: "2026", active: false },
  { name: "Toronto",  status: "Opening", year: "2026", active: false },
  { name: "Vancouver",status: "Opening", year: "2026", active: false },
];

export default function Cities() {
  return (
    <section className="py-36 px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="rule border-t border-ink mb-8 pt-px" />
      <div className="flex items-baseline justify-between mb-20">
        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">05</span>
        <span className="font-serif italic text-muted text-[15px]">Cities</span>
      </div>

      {/* Typographic list — no cards, no map, no hover badges */}
      <div className="max-w-2xl">
        {cities.map((city, i) => (
          <div key={city.name}>
            <div className={`rule-muted border-t ${i === 0 ? "border-ink/20" : "border-ink/10"} py-7 flex items-baseline justify-between`}>
              <span
                className="font-serif font-light text-ink"
                style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
              >
                {city.name}
              </span>
              <div className="flex items-baseline gap-8">
                <span className={`label ${city.active ? "text-gold" : "text-muted"}`}>
                  {city.status}
                </span>
                <span className="label text-muted">{city.year}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="rule-muted border-t border-ink/10" />
      </div>
    </section>
  );
}
