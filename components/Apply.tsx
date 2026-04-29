export default function Apply() {
  return (
    <section id="apply" className="py-36 px-10 max-w-[1400px] mx-auto">
      <div className="rule border-t border-ink mb-8 pt-px" />

      {/* Single declarative line. Nothing else. */}
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-7">
          <p className="label-gold mb-8">08 · Apply</p>
          <h2
            className="font-serif font-light text-ink leading-[1.1]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            If this sounds like<br />
            <em className="italic text-gold">your circle.</em>
          </h2>
        </div>

        {/* CTA — right side, bottom-aligned */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-5 pb-2">
          <p className="font-sans font-light text-muted text-[14px] leading-[1.8]">
            Applications are reviewed individually. We&rsquo;ll be in touch
            within a week.
          </p>
          <a
            href="https://tally.so/r/q4RLNk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[12px] tracking-[0.16em] uppercase text-ink border-b border-ink pb-1 self-start hover:text-gold hover:border-gold transition-colors duration-400"
          >
            Join the waitlist
          </a>
        </div>
      </div>

      {/* Footer — minimal */}
      <div className="rule-muted border-t border-ink/10 mt-36 pt-8 flex items-center justify-between">
        <span className="font-serif text-[15px] tracking-[0.14em] uppercase text-ink">
          Invi<span className="text-gold">city</span>
        </span>
        <p className="label text-muted">
          London · New York 2026 · Toronto 2026
        </p>
        <p className="label text-muted">© 2026 Invicity</p>
      </div>
    </section>
  );
}
