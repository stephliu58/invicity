export default function Opening() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-10 max-w-[1400px] mx-auto">
      {/* Small label above — editorial breadcrumb */}
      <div className="mb-10">
        <span className="label-gold">Global Membership</span>
      </div>

      {/* Display headline — left-aligned, no centering, no background */}
      <h1
        className="font-serif font-light text-ink leading-[1.0] mb-10"
        style={{ fontSize: "clamp(64px, 8.5vw, 128px)", letterSpacing: "-0.01em" }}
      >
        Your invite to<br />
        <em className="text-gold not-italic" style={{ fontStyle: "italic" }}>
          every city.
        </em>
      </h1>

      {/* Hairline + city/date line */}
      <div className="rule-muted border-t border-ink/12 pt-7 flex items-center justify-between max-w-3xl">
        <p className="label text-muted">
          London · New York 2026 · Toronto 2026
        </p>
        <a
          href="#about"
          className="label text-muted hover:text-ink flex items-center gap-3"
        >
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M8 3v10M4 9l4 4 4-4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
