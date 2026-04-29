import Image from "next/image";

const photos = [
  {
    src: "/photos/wine-night-invicity.jpg",
    caption: "Invicity Wine Night — London, 2026",
    wide: true,
  },
  {
    src: "/photos/wine-night-1.jpg",
    caption: "Wine Night — London",
    wide: false,
  },
  {
    src: "/photos/wine-night-4.jpg",
    caption: "Wine Night — London",
    wide: false,
  },
  {
    src: "/photos/picnic-3.jpg",
    caption: "Invicity Picnic — London, 2026",
    wide: true,
  },
  {
    src: "/photos/picnic-1.jpg",
    caption: "Picnic — London",
    wide: false,
  },
  {
    src: "/photos/picnic-4.jpg",
    caption: "Picnic — London",
    wide: false,
  },
];

export default function Evenings() {
  return (
    <section id="evenings" className="py-36 px-10 max-w-[1400px] mx-auto">
      {/* Section header — number + label on same hairline */}
      <div className="rule border-t border-ink mb-8 pt-px" />
      <div className="flex items-baseline justify-between mb-16">
        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold">02</span>
        <span className="font-serif italic text-muted text-[15px]">The evenings</span>
      </div>

      {/* Headline */}
      <h2
        className="font-serif font-light text-ink leading-[1.1] mb-20 max-w-2xl"
        style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
      >
        Every gathering is worth<br />
        <em className="italic">the journey.</em>
      </h2>

      {/* Photo grid — editorial, no overlays, no rounded corners */}
      <div className="space-y-2">
        {/* Row 1: Wine Night */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-8 relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src={photos[0].src}
              alt={photos[0].caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="col-span-12 md:col-span-4 relative" style={{ aspectRatio: "4/3" }}>
            <Image
              src={photos[1].src}
              alt={photos[1].caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Caption row — beneath the photos, not overlaid */}
        <div className="grid grid-cols-12 gap-2 pb-12">
          <div className="col-span-8">
            <p className="label pt-2">{photos[0].caption}</p>
          </div>
          <div className="col-span-4">
            <p className="label pt-2">{photos[1].caption}</p>
          </div>
        </div>

        {/* Row 2: Picnic */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 relative" style={{ aspectRatio: "4/3" }}>
            <Image
              src={photos[4].src}
              alt={photos[4].caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="col-span-12 md:col-span-8 relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src={photos[3].src}
              alt={photos[3].caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </div>

        {/* Caption row */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <p className="label pt-2">{photos[4].caption}</p>
          </div>
          <div className="col-span-8">
            <p className="label pt-2">{photos[3].caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
