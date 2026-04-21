"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--linen)",
        borderBottom: "0.5px solid var(--gold-light)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-cormorant text-xl font-medium"
          style={{ color: "var(--brown)" }}
        >
          TW
        </a>
        <ul className="flex items-center gap-8">
          {["Work", "Ventures", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-jost text-xs tracking-widest uppercase relative group transition-colors duration-200"
                style={{
                  color: "var(--taupe)",
                  textDecoration: "none",
                  borderBottom:
                    item === "Contact"
                      ? "1px solid var(--gold)"
                      : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {item}
                {item !== "Contact" && (
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-200"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
