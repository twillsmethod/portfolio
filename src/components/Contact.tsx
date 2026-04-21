import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p
            className="font-jost text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--taupe)", letterSpacing: "0.2em" }}
          >
            Let&apos;s connect
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2
            className="font-cormorant font-medium leading-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              color: "var(--brown)",
            }}
          >
            Have a role or a{" "}
            <em>project in mind?</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p
            className="font-jost mb-10 leading-relaxed"
            style={{ fontSize: "13px", color: "var(--taupe)", fontWeight: 300 }}
          >
            Open to PM, analyst, and operator roles — and always building
            something new.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <a
            href="mailto:mekamoe34@gmail.com"
            className="btn-outline inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase px-8 py-4 mb-12"
            style={{ letterSpacing: "0.12em" }}
          >
            Get in touch
            <span style={{ color: "var(--gold)" }}>→</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div
            className="flex items-center justify-center gap-6 mb-8"
            style={{ borderTop: "0.5px solid var(--gold-light)", paddingTop: "32px" }}
          >
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/tamekawills" },
              { label: "GitHub", href: "https://github.com/twillsmethod" },
              { label: "Resume", href: "/resume.pdf" },
            ].map((link, i) => (
              <span key={link.label} className="flex items-center gap-6">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-jost text-xs tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{
                    color: "var(--taupe)",
                    letterSpacing: "0.15em",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
                {i < 2 && (
                  <span
                    className="w-px h-3 inline-block"
                    style={{ backgroundColor: "var(--gold-light)" }}
                  />
                )}
              </span>
            ))}
          </div>

          <p
            className="font-jost"
            style={{ fontSize: "11px", color: "var(--taupe)", fontWeight: 300 }}
          >
            tamekawills.com
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
