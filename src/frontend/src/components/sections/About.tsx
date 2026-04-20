import { siteConfig } from "@/data/content";

const stats = [
  { value: "11+", label: "Courses Offered" },
  { value: "16+", label: "Degree Programs" },
  { value: "4.8★", label: "Google Rating" },
];

export function About() {
  const scrollToAdmission = () => {
    document
      .getElementById("admission")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-muted/30" data-ocid="about.section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="font-body text-xs font-semibold text-accent uppercase tracking-widest">
                About Us
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-primary">LS Digital Academy</span>
            </h2>

            {/* Mission badge */}
            <div className="flex items-start gap-3 mb-6 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <span
                className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-accent/15 text-accent"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <p className="font-body text-sm font-semibold text-foreground leading-snug">
                "Empowering students with digital skills for a brighter career."
              </p>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base">
              <p>
                LS Digital Academy is a premier computer training institute
                located in the heart of{" "}
                <strong className="text-foreground">
                  Karawal Nagar, Delhi
                </strong>
                . We have been transforming students into skilled professionals
                through practical, job-oriented training.
              </p>
              <p>
                We offer a wide range of courses — from Basic Computer and
                Advanced Excel to Web Designing, Tally Prime, and Ethical
                Hacking — each designed to make you employable from day one. Our
                experienced faculty brings real-world expertise into every
                class.
              </p>
              <p>
                Conveniently located at{" "}
                <strong className="text-foreground">
                  {siteConfig.addressShort}
                </strong>
                , we are easily accessible to students from across Delhi NCR.
                Affordable fees, flexible timings, and a welcoming atmosphere
                make us the{" "}
                <strong className="text-foreground">
                  most trusted institute in Karawal Nagar
                </strong>
                .
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToAdmission}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-bold text-white text-sm transition-smooth hover:opacity-90 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              style={{
                background: "linear-gradient(135deg, #FF7A00, #e86d00)",
              }}
              data-ocid="about.enroll_button"
            >
              Join Us Today
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>

          {/* Right: Decorative visual */}
          <div className="relative flex items-center justify-center">
            {/* Background blob */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, rgba(11,60,93,0.12) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Main card */}
            <div
              className="relative w-full max-w-sm mx-auto rounded-3xl p-8 shadow-xl border border-border bg-card overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(11,60,93,0.12)" }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl"
                style={{ background: "rgba(255,122,0,0.08)" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-2 h-12 rounded-bl-2xl"
                style={{ background: "#FF7A00" }}
                aria-hidden="true"
              />

              {/* Academy icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, #0B3C5D, #0d4d78)",
                }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-white"
                  aria-hidden="true"
                >
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {siteConfig.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {siteConfig.addressShort}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-muted/60"
                  >
                    <div className="font-display text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-muted-foreground">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-body text-xs leading-relaxed">
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
