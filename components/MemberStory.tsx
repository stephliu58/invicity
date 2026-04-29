import Image from "next/image";

export default function MemberStory() {
  return (
    <section className="py-36 px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="rule border-t border-ink mb-8 pt-px" />
      <div className="flex items-baseline justify-between mb-20">
        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">04</span>
        <span className="font-serif italic text-muted text-[15px]">A member story</span>
      </div>

      {/* Pull quote — large, across the full width */}
      <blockquote
        className="font-serif italic font-light text-ink leading-[1.15] mb-20"
        style={{ fontSize: "clamp(28px, 3.5vw, 50px)", maxWidth: "900px" }}
      >
        &ldquo;We met at a wine night. Within three months
        we were on a train to Scotland together.&rdquo;
      </blockquote>

      {/* Two-column: body left, photos right */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Body — 5 columns */}
        <div className="col-span-12 md:col-span-5">
          <p className="label-gold mb-6">
            Holly &amp; Stella · Invicity Wine Night, London
          </p>
          <p className="font-sans font-light text-ink-mid text-[15px] leading-[1.8] mb-5">
            Holly and Stella met at an Invicity Wine Night in London — two
            strangers seated at the same table. They became close within weeks.
          </p>
          <p className="font-sans font-light text-muted text-[15px] leading-[1.8]">
            What followed was a friendship that crossed cities. A week in the
            Scottish Highlands. Introductions to each other&rsquo;s professional
            circles. The kind of connection that doesn&rsquo;t happen at
            networking events.
          </p>
        </div>

        {/* Photos — right side, 6 columns, offset from col 7 */}
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative col-span-2" style={{ aspectRatio: "3/2" }}>
              <Image
                src="/photos/holly-stella-2.jpg"
                alt="Holly and Stella"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative" style={{ aspectRatio: "1/1" }}>
              <Image
                src="/photos/holly-stella-1.jpg"
                alt="Holly and Stella"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative" style={{ aspectRatio: "1/1" }}>
              <Image
                src="/photos/wine-night-3.jpg"
                alt="Invicity Wine Night"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
