import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Systems thinking",
    body: "Process design, gap analysis, workflow builds. I see how things connect before moving pieces.",
  },
  {
    title: "Project operations",
    body: "Cross-functional coordination, stakeholder management, delivery without the noise.",
  },
  {
    title: "Product building",
    body: "Operator who ships. AI tools, Chrome extensions, Next.js apps.",
  },
];

export default function WhatIBring() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
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
              what I bring
            </span>
          </div>
        </ScrollReveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div
                className="pt-6 px-0"
                style={{
                  borderTop: "2px solid var(--gold)",
                }}
              >
                <h3
                  className="font-cormorant font-medium mb-3"
                  style={{ fontSize: "22px", color: "var(--brown)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-jost leading-relaxed"
                  style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
                >
                  {p.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
