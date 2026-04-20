const highlights = [
  {
    id: "practical",
    title: "100% Practical Training",
    description:
      "Every concept is taught hands-on. You practice real tasks from day one — no theory-only lectures.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "faculty",
    title: "Experienced Faculty",
    description:
      "Our trainers bring industry expertise and explain complex topics in simple, easy-to-follow lessons.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "career",
    title: "Career-Focused Courses",
    description:
      "Our curriculum is designed around real job roles. You graduate with skills employers actually need.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "certification",
    title: "Certification Provided",
    description:
      "Earn a recognised certificate upon completion — boost your resume and stand out to employers.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="6" />
        <path
          d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Highlights() {
  return (
    <section
      id="highlights"
      className="py-20 bg-background"
      data-ocid="highlights.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="font-body text-xs font-semibold text-accent uppercase tracking-widest">
              Our Strengths
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Why We{" "}
            <span className="relative inline-block">
              Stand Out
              <span
                className="absolute left-0 -bottom-1 w-full h-1 rounded-full bg-accent/40"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            We combine practical skills with career guidance to make you
            job-ready from day one.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.id}
              className="card-hover group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card shadow-sm"
              data-ocid={`highlights.item.${idx + 1}`}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-accent/60 group-hover:w-20 transition-all duration-300"
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="mb-5 flex items-center justify-center w-16 h-16 rounded-2xl text-accent transition-smooth group-hover:scale-110"
                style={{
                  background: "rgba(255, 122, 0, 0.08)",
                  border: "1px solid rgba(255,122,0,0.15)",
                }}
              >
                {item.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
