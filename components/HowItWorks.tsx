const items = [
  {
    num: "01",
    title: "Invicity Nights",
    body: "Intimate evening gatherings in private venues — dinners, wine nights, cultural openings. Curated for depth, not volume. Every room is worth being in.",
  },
  {
    num: "02",
    title: "The Circle",
    body: "Access to every active chapter. Land in London, New York, or Toronto and have someone worth meeting. Members introduce members — no cold rooms.",
  },
  {
    num: "03",
    title: "Signature Match",
    body: "For Passport members: a personal introduction to one local Invicity member in each city you visit — same industry, same level, something worth sharing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-36 px-10 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="rule-light border-t border-cream/15 mb-8 pt-px" />
        <div className="flex items-baseline justify-between mb-20">
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">03</span>
          <span className="font-serif italic text-cream/40 text-[15px]">How it works</span>
        </div>

        <h2
          className="font-serif font-light text-cream leading-[1.1] mb-24 max-w-xl"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
        >
          More than a meetup. The&nbsp;network{" "}
          <em className="italic text-gold-light">travels with you.</em>
        </h2>

        {/* Editorial numbered list — single column, not a grid */}
        <div className="max-w-2xl space-y-0">
          {items.map((item, i) => (
            <div key={item.num}>
              <div className="rule-light border-t border-cream/10 py-10 grid grid-cols-12 gap-6">
                {/* Number */}
                <div className="col-span-1">
                  <span className="font-sans text-[11px] tracking-[0.16em] text-gold/70">
                    {item.num}
                  </span>
                </div>
                {/* Content */}
                <div className="col-span-11">
                  <h3
                    className="font-serif font-light text-cream mb-4"
                    style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-cream/55 text-[14px] leading-[1.8]">
                    {item.body}
                  </p>
                </div>
              </div>
              {i === items.length - 1 && (
                <div className="rule-light border-t border-cream/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
