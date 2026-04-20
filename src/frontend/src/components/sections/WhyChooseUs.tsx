import { whyCards } from "@/data/content";
import type { WhyCard as WhyCardType } from "@/types";
import {
  BadgeIndianRupee,
  Heart,
  Laptop,
  TrendingUp,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  BadgeIndianRupee: <BadgeIndianRupee className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Heart: <Heart className="w-7 h-7" />,
};

function WhyCard({ card, index }: { card: WhyCardType; index: number }) {
  const isAccented = index % 2 === 0;
  return (
    <div
      className={`card-hover group relative flex flex-col p-8 rounded-2xl border transition-smooth ${
        isAccented
          ? "bg-primary text-white border-primary/80 shadow-lg"
          : "bg-card text-foreground border-border shadow-sm"
      }`}
      data-ocid={`why.item.${index + 1}`}
    >
      {/* Decorative top accent dot */}
      <div
        className={`absolute top-6 right-6 w-2 h-2 rounded-full ${
          isAccented ? "bg-[#FF7A00]" : "bg-primary/30"
        }`}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`mb-5 flex items-center justify-center w-14 h-14 rounded-2xl ${
          isAccented
            ? "bg-white/10 text-[#FF7A00] border border-white/15"
            : "bg-primary/8 text-primary border border-primary/15"
        }`}
        style={isAccented ? {} : { background: "rgba(11,60,93,0.07)" }}
      >
        {iconMap[card.icon] ?? (
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </div>

      <h3
        className={`font-display text-xl font-bold mb-3 leading-snug ${
          isAccented ? "text-white" : "text-foreground"
        }`}
      >
        {card.title}
      </h3>
      <p
        className={`font-body text-sm leading-relaxed ${
          isAccented ? "text-white/75" : "text-muted-foreground"
        }`}
      >
        {card.description}
      </p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-background"
      data-ocid="why.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/8 border border-primary/15"
            style={{ background: "rgba(11,60,93,0.07)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest">
              Benefits
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Why Choose{" "}
            <span className="relative inline-block">
              LS Digital Academy?
              <span
                className="absolute left-0 -bottom-1 w-full h-1 rounded-full"
                style={{ background: "rgba(255,122,0,0.35)" }}
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            We are not just a training centre — we are your career launchpad.
            Here's what sets us apart.
          </p>
        </div>

        {/* Cards grid — 3 + 2 layout on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, idx) => (
            <WhyCard key={card.id} card={card} index={idx} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-14 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 100%)",
          }}
        >
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to Start Your Journey?
            </h3>
            <p className="font-body text-white/70 text-sm sm:text-base">
              Join LS Digital Academy and take the first step towards a
              rewarding digital career.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("admission")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-shrink-0 px-8 py-4 rounded-xl font-body font-bold text-white text-base transition-smooth hover:opacity-90 hover:scale-105 shadow-lg shadow-[#FF7A00]/30 focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:outline-none"
            style={{ background: "linear-gradient(135deg, #FF7A00, #e86d00)" }}
            data-ocid="why.enroll_button"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
