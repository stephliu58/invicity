export default function Premise() {
  return (
    <section id="about" className="py-36 px-10 max-w-[1400px] mx-auto">
      {/* Full-width top rule */}
      <div className="rule border-t border-ink mb-16" />

      {/* Two-column editorial layout — not a feature grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left: short serif statement — 5 columns */}
        <div className="col-span-12 md:col-span-5">
          <p
            className="font-serif font-light text-ink leading-[1.2]"
            style={{ fontSize: "clamp(28px, 2.8vw, 42px)" }}
          >
            A membership for people who collect cities the way others
            collect{" "}
            <em className="italic text-gold">experiences.</em>
          </p>
        </div>

        {/* Right: prose — starts at col 8, 4 columns wide */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end">
          <p className="font-sans font-light text-ink-mid leading-[1.75] text-[15px] mb-5">
            Invicity is a private membership for ambitious 25–40 year-old
            professionals who move between cities — consultants, founders,
            operators, creatives. We host intimate evening gatherings, Invicity
            Nights, in cities around the world.
          </p>
          <p className="font-sans font-light text-muted leading-[1.75] text-[15px]">
            Members pay for taste, depth, and trusted curation. When you land
            somewhere new, you have someone worth calling. That&rsquo;s the
            only promise we make.
          </p>
        </div>
      </div>
    </section>
  );
}
