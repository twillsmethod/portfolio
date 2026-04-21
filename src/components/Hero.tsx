"use client";

import { useEffect, useState } from "react";
import GoldSpeckles from "./GoldSpeckles";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delayMs: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 700ms ease ${delayMs}ms, transform 700ms ease ${delayMs}ms`,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: "var(--linen)" }}
    >
      <GoldSpeckles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left column */}
          <div className="pr-0 lg:pr-16 relative">
            <div style={fadeStyle(0)}>
              <p
                className="font-cormorant italic text-xl mb-3"
                style={{ color: "var(--gold)" }}
              >
                hello, I&apos;m
              </p>
            </div>

            <div style={fadeStyle(150)}>
              <h1
                className="font-cormorant font-medium leading-none tracking-tight mb-6"
                style={{
                  fontSize: "clamp(60px, 8vw, 88px)",
                  color: "var(--brown)",
                  letterSpacing: "-0.02em",
                }}
              >
                Tameka
                <br />
                Wills
              </h1>
            </div>

            <div style={fadeStyle(300)}>
              <div
                className="flex items-center gap-4 mb-6"
              >
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "var(--gold-light)" }}
                />
                <p
                  className="font-jost text-xs tracking-widest uppercase whitespace-nowrap"
                  style={{ color: "var(--taupe)", letterSpacing: "0.18em" }}
                >
                  Operator · Analyst · Founder
                </p>
              </div>
            </div>

            <div style={fadeStyle(450)}>
              <a
                href="#work"
                className="inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 group"
                style={{
                  border: "1px solid var(--brown)",
                  borderRadius: "2px",
                  color: "var(--brown)",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                See Systems I Built
                <span style={{ color: "var(--gold)" }}>→</span>
              </a>
            </div>

            {/* Vertical divider — desktop only */}
            <div
              className="absolute right-0 top-0 bottom-0 w-px hidden lg:block"
              style={{ backgroundColor: "var(--gold-light)" }}
            />
          </div>

          {/* Right column */}
          <div className="pl-0 lg:pl-16 mt-12 lg:mt-0">
            <div style={fadeStyle(200)}>
              <div
                className="w-12 h-px mb-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </div>

            <div style={fadeStyle(350)}>
              <h2
                className="font-cormorant font-medium leading-tight mb-5"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  color: "var(--brown)",
                }}
              >
                Turning messy operations into reliable{" "}
                <em>systems.</em>
              </h2>
            </div>

            <div style={fadeStyle(500)}>
              <p
                className="font-jost mb-8 leading-relaxed"
                style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
              >
                From healthcare to tech ventures — I design, build, and run
                things that move.
              </p>
            </div>

            {/* Metrics */}
            <div style={fadeStyle(650)}>
              <div
                className="flex items-stretch mb-8"
                style={{ borderTop: "0.5px solid var(--gold-light)", borderBottom: "0.5px solid var(--gold-light)" }}
              >
                {[
                  { value: "15+", label: "YRS OPS" },
                  { value: "4", label: "VENTURES" },
                  { value: "Public + Private", label: "SECTOR" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex-1 flex flex-col items-center justify-center py-5"
                    style={{
                      borderLeft: i > 0 ? "0.5px solid var(--gold-light)" : "none",
                    }}
                  >
                    <span
                      className="font-cormorant font-medium block leading-none mb-1"
                      style={{
                        fontSize: i === 2 ? "14px" : "26px",
                        color: "var(--brown)",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="font-jost uppercase block"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.15em",
                        color: "var(--taupe)",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status pill */}
            <div style={fadeStyle(800)}>
              <span
                className="inline-flex items-center gap-2 font-jost px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "var(--cream)",
                  fontSize: "11px",
                  color: "var(--taupe)",
                  fontWeight: 400,
                }}
              >
                <span style={{ color: "#6B8B5A", fontSize: "8px" }}>●</span>
                Pittsburgh, PA · Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
