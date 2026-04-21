"use client";

import ScrollReveal from "./ScrollReveal";

const ventures = [
  {
    name: "Careside Group",
    status: "Live",
    statusType: "live",
    description:
      "Built operational systems for furnished housing: bookings, tenant turnover, workflows, service coordination.",
  },
  {
    name: "Gimmie",
    status: "In build",
    statusType: "other",
    description:
      "Chrome extension — AI-agnostic movement layer between browser tabs and AI tools.",
  },
  {
    name: "Grounded",
    status: "Building",
    statusType: "other",
    description:
      "Sober living home directory for Pittsburgh — filling a real gap in recovery housing access.",
  },
  {
    name: "Obscura",
    status: "In production",
    statusType: "other",
    description:
      "Cinematic short-form video brand exploring phobias. Dark, structured, premium.",
  },
];

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-24"
      style={{ backgroundColor: "var(--linen)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <ScrollReveal className="flex justify-center mb-16">
          <div
            className="px-8 py-3"
            style={{
              border: "1.5px solid var(--brown)",
              borderRadius: "100px",
            }}
          >
            <span
              className="font-cormorant italic font-medium"
              style={{ fontSize: "28px", color: "var(--brown)" }}
            >
              also building
            </span>
          </div>
        </ScrollReveal>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ventures.map((venture, i) => (
            <ScrollReveal key={venture.name} delay={i * 100}>
              <VentureCard venture={venture} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureCard({ venture }: { venture: (typeof ventures)[0] }) {
  return (
    <div
      className="group p-5 rounded-md cursor-default transition-all duration-200"
      style={{
        backgroundColor: "var(--linen)",
        border: "0.5px solid var(--gold-light)",
        borderRadius: "6px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 24px rgba(46, 31, 20, 0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3
          className="font-cormorant font-medium"
          style={{ fontSize: "22px", color: "var(--brown)" }}
        >
          {venture.name}
        </h3>
        <span
          className="font-jost text-xs px-3 py-1 rounded-full ml-3 mt-1 whitespace-nowrap"
          style={
            venture.statusType === "live"
              ? {
                  border: "0.5px solid var(--gold)",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  fontSize: "10px",
                }
              : {
                  border: "0.5px solid var(--taupe)",
                  color: "var(--taupe)",
                  letterSpacing: "0.1em",
                  fontSize: "10px",
                }
          }
        >
          {venture.status}
        </span>
      </div>
      <p
        className="font-jost leading-relaxed"
        style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
      >
        {venture.description}
      </p>
    </div>
  );
}
