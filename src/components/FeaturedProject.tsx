import ScrollReveal from "./ScrollReveal";

export default function FeaturedProject() {
  return (
    <section
      id="work"
      className="py-24"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label with washi tape */}
        <ScrollReveal className="mb-12">
          <div className="flex items-center justify-between">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 -mx-3 -my-1"
                style={{
                  backgroundColor: "var(--gold)",
                  opacity: 0.2,
                  transform: "rotate(-1deg)",
                  borderRadius: "1px",
                }}
              />
              <span
                className="relative font-jost text-xs tracking-widest uppercase"
                style={{ color: "var(--brown)", letterSpacing: "0.15em" }}
              >
                Featured project
              </span>
            </div>
            <span
              className="font-jost text-xs tracking-widest uppercase px-3 py-1"
              style={{
                border: "0.5px solid var(--gold)",
                color: "var(--gold)",
                borderRadius: "100px",
                letterSpacing: "0.12em",
                fontSize: "10px",
              }}
            >
              ● Live build
            </span>
          </div>
        </ScrollReveal>

        {/* Project card */}
        <ScrollReveal delay={100}>
          <div
            className="rounded-none overflow-hidden"
            style={{
              backgroundColor: "var(--linen)",
              border: "1px solid var(--gold-light)",
            }}
          >
            {/* Preview area */}
            <div
              className="p-10 flex flex-col items-center justify-center text-center min-h-[200px]"
              style={{ backgroundColor: "#3D2A1A" }}
            >
              <h3
                className="font-cormorant font-medium mb-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "var(--gold-light)",
                  letterSpacing: "-0.01em",
                }}
              >
                MySSICalendar.com
              </h3>
              <p
                className="font-jost mb-6"
                style={{ fontSize: "12px", color: "var(--sand)", fontWeight: 300 }}
              >
                Free SSI · SSDI · Retirement · Survivor payment dates
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Updated 2026", "No login required", "Mobile friendly"].map((badge) => (
                  <span
                    key={badge}
                    className="font-jost text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(196, 168, 130, 0.15)",
                      border: "0.5px solid var(--gold-light)",
                      color: "var(--gold-light)",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-jost text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
                >
                  The problem
                </p>
                <p
                  className="font-jost leading-relaxed"
                  style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
                >
                  SSI payment dates are confusing and buried in government sites.
                  People on fixed income miss payments when dates shift.
                </p>
              </div>
              <div>
                <p
                  className="font-jost text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
                >
                  What I built
                </p>
                <p
                  className="font-jost leading-relaxed"
                  style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
                >
                  A free dashboard with upcoming payment dates, early payment
                  logic, and helpful tools — shipped in under 24 hours.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-8 py-5 flex items-center justify-between"
              style={{ borderTop: "0.5px solid var(--gold-light)" }}
            >
              <a
                href="https://github.com/twillsmethod"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase"
                style={{
                  letterSpacing: "0.12em",
                  padding: "8px 16px",
                }}
              >
                <GitHubIcon />
                GitHub
              </a>
              <span
                className="font-jost text-xs"
                style={{ color: "var(--taupe)", fontWeight: 300 }}
              >
                More projects coming soon
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
