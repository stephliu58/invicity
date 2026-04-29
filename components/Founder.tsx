import Image from "next/image";

export default function Founder() {
  return (
    <section id="about" className="py-36 px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="rule border-t border-ink mb-8 pt-px" />
      <div className="flex items-baseline justify-between mb-20">
        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">07</span>
        <span className="font-serif italic text-muted text-[15px]">The founder</span>
      </div>

      {/* Asymmetric grid: photo left (4 col), text right (6 col, offset) */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Photo — no gradient overlay, no dark panel */}
        <div
          className="col-span-12 md:col-span-4 relative"
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src="/photos/stephanie-profile.jpg"
            alt="Stephanie L., Founder of Invicity"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Text — starts at column 6 */}
        <div className="col-span-12 md:col-span-6 md:col-start-6 pt-2">
          <h2
            className="font-serif font-light text-ink leading-[1.1] mb-10"
            style={{ fontSize: "clamp(30px, 3vw, 44px)" }}
          >
            Hi, I&rsquo;m Stephanie —<br />
            <em className="italic text-gold">founder of Invicity.</em>
          </h2>

          <div className="space-y-5">
            <p className="font-sans font-light text-ink-mid text-[15px] leading-[1.85]">
              I spent three years in management consulting in the US, advising
              Fortune 500 companies on how to build better systems. Meanwhile,
              I was quietly building one of my own — a life stitched together
              across cities.
            </p>
            <p className="font-sans font-light text-muted text-[15px] leading-[1.85]">
              After college, my closest friends scattered — San Francisco, New
              York, Stockholm, Hong Kong. Suddenly my favourite hobby was going
              to the airport. I&rsquo;d fly out on a Friday to crash
              someone&rsquo;s Monday trivia night, be a plus-one at a party
              where I knew no one, or sign up for a dance class and completely
              humiliate myself. Worth it every time.
            </p>
            <p className="font-sans font-light text-muted text-[15px] leading-[1.85]">
              I&rsquo;ve moved countries twice — from home to the US for
              college, then from the US to London — both times knowing no one.
              What I learned is that a city is only as good as the people you
              know in it.
            </p>
            <p className="font-sans font-light text-muted text-[15px] leading-[1.85] italic">
              If your group chat is already spread across three time zones,
              you&rsquo;re one of us.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 pt-10 border-t border-ink/10">
            <p
              className="font-serif italic font-light text-ink"
              style={{ fontSize: "28px" }}
            >
              — Stephanie
            </p>
            <p className="label text-muted mt-2">Founder, Invicity · London</p>
          </div>
        </div>
      </div>
    </section>
  );
}
