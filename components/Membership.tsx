export default function Membership() {
  return (
    <section id="membership" className="py-36 px-10 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="rule-light border-t border-cream/15 mb-8 pt-px" />
        <div className="flex items-baseline justify-between mb-20">
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">06</span>
          <span className="font-serif italic text-cream/40 text-[15px]">On membership</span>
        </div>

        {/* Two-column prose layout */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          {/* Heading — 5 columns */}
          <div className="col-span-12 md:col-span-5">
            <h2
              className="font-serif font-light text-cream leading-[1.1]"
              style={{ fontSize: "clamp(34px, 3.5vw, 52px)" }}
            >
              Not open to everyone.{" "}
              <em className="italic text-gold-light">That&rsquo;s the point.</em>
            </h2>
          </div>

          {/* Body — right side */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <p className="font-sans font-light text-cream/55 text-[14px] leading-[1.85] mb-5">
              Membership is by application. We review every candidate — not for
              credentials, but for character. The kind of person who contributes
              to a room, not just occupies it.
            </p>
            <p className="font-sans font-light text-cream/40 text-[14px] leading-[1.85]">
              We curate the room so you don&rsquo;t have to filter the people.
            </p>
          </div>
        </div>

        {/* Tiers — prose, not cards */}
        <div className="grid grid-cols-12 gap-8">
          {/* Chapter member */}
          <div className="col-span-12 md:col-span-5 border-t border-cream/10 pt-10">
            <h3
              className="font-serif font-light text-cream mb-5"
              style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
            >
              Chapter Membership
            </h3>
            <p className="font-sans font-light text-cream/50 text-[13px] leading-[1.85] mb-5">
              Access to your home city chapter. Priority invitations to
              Invicity Nights, member introductions within the chapter, and
              digital membership status.
            </p>
            <p className="label-gold">Founding pricing for waitlist members</p>
          </div>

          {/* Passport member */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 border-t border-cream/10 pt-10">
            <h3
              className="font-serif font-light text-cream mb-5"
              style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
            >
              Passport Membership
            </h3>
            <p className="font-sans font-light text-cream/50 text-[13px] leading-[1.85] mb-5">
              Access to all active chapters globally. The Signature Match in
              every city you visit, cross-chapter introductions, and early
              access to new openings.
            </p>
            <p className="label-gold">Founding pricing for waitlist members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
