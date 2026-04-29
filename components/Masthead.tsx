"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-none" : "bg-transparent"
      }`}
    >
      <div className="rule-muted border-b border-ink/10">
        <div className="max-w-[1400px] mx-auto px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-[17px] tracking-[0.16em] uppercase text-ink no-underline"
          >
            Invi<span className="text-gold">city</span>
          </Link>

          {/* Nav — four links, no CTA button */}
          <nav>
            <ul className="flex gap-10 list-none m-0 p-0">
              {[
                { label: "About", href: "#about" },
                { label: "Events", href: "#evenings" },
                { label: "Membership", href: "#membership" },
                { label: "Apply", href: "#apply" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="label text-muted hover:text-ink transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
