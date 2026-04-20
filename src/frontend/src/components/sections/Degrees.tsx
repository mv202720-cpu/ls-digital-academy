import { degrees } from "@/data/content";
import type { Degree } from "@/types";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const FULL_NAMES: Record<string, string> = {
  ba: "Bachelor of Arts",
  ma: "Master of Arts",
  bcom: "Bachelor of Commerce",
  mcom: "Master of Commerce",
  bba: "Bachelor of Business Administration",
  mba: "Master of Business Administration",
  bca: "Bachelor of Computer Applications",
  mca: "Master of Computer Applications",
  btech: "Bachelor of Technology",
  mtech: "Master of Technology",
  llb: "Bachelor of Laws",
  llm: "Master of Laws",
  bed: "Bachelor of Education",
  med: "Master of Education",
  bsc: "Bachelor of Science",
  msc: "Master of Science",
};

const LEVEL_STYLES: Record<Degree["level"], string> = {
  UG: "text-xs font-semibold uppercase tracking-wide",
  PG: "text-xs font-semibold uppercase tracking-wide",
  Professional: "text-xs font-semibold uppercase tracking-wide",
};

const LEVEL_COLORS: Record<Degree["level"], string> = {
  UG: "#0B3C5D",
  PG: "#FF7A00",
  Professional: "#1a6b5a",
};

function DegreeBadge({ degree, index }: { degree: Degree; index: number }) {
  const fullName = FULL_NAMES[degree.id] ?? degree.name;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
      data-ocid={`degrees.item.${index + 1}`}
      className="group relative flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border-2 border-border bg-card
        cursor-default select-none transition-smooth
        hover:border-current hover:shadow-md hover:-translate-y-1"
    >
      {/* Level dot */}
      <span
        className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-70 group-hover:opacity-100 transition-smooth"
        style={{ backgroundColor: LEVEL_COLORS[degree.level] }}
        aria-hidden="true"
      />

      {/* Code */}
      <span
        className="font-display font-bold text-xl transition-smooth group-hover:scale-105"
        style={{ color: "#0B3C5D" }}
      >
        {degree.name}
      </span>

      {/* Full name */}
      <span className="font-body text-xs text-muted-foreground text-center leading-tight line-clamp-2">
        {fullName}
      </span>

      {/* Level label */}
      <span
        className={[
          "mt-0.5 px-2 py-0.5 rounded-full text-white",
          LEVEL_STYLES[degree.level],
        ].join(" ")}
        style={{
          backgroundColor: LEVEL_COLORS[degree.level],
          fontSize: "0.6rem",
        }}
      >
        {degree.level}
      </span>
    </motion.div>
  );
}

export function Degrees() {
  return (
    <section
      id="degrees"
      className="py-20 bg-muted/30"
      data-ocid="degrees.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-4"
            style={{
              borderColor: "#0B3C5D",
              backgroundColor: "rgba(11,60,93,0.06)",
            }}
          >
            <GraduationCap
              className="w-4 h-4"
              style={{ color: "#0B3C5D" }}
              aria-hidden="true"
            />
            <span
              className="font-body text-sm font-semibold"
              style={{ color: "#0B3C5D" }}
            >
              University Programs
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            University &amp; Degree Programs
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Enroll in UGC-recognized distance / open university programs with
            full academic support, study material, and exam guidance.
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(["UG", "PG", "Professional"] as Degree["level"][]).map((lvl) => (
            <span
              key={lvl}
              className="flex items-center gap-1.5 font-body text-xs text-muted-foreground"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: LEVEL_COLORS[lvl] }}
                aria-hidden="true"
              />
              {lvl === "UG"
                ? "Undergraduate"
                : lvl === "PG"
                  ? "Postgraduate"
                  : "Professional"}
            </span>
          ))}
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {degrees.map((degree, i) => (
            <DegreeBadge key={degree.id} degree={degree} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body mb-4">
            Not sure which program suits you?{" "}
            <span className="font-semibold text-foreground">
              Talk to our counsellor — it&apos;s free.
            </span>
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="degrees.counsellor_button"
            className="btn-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-body font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-smooth hover:text-white"
            style={{
              borderColor: "#0B3C5D",
              color: "#0B3C5D",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#0B3C5D";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#0B3C5D";
            }}
          >
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            Get Free Counselling
          </button>
        </motion.div>
      </div>
    </section>
  );
}
