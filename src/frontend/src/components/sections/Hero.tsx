import { siteConfig } from "@/data/content";
import { useEffect, useState } from "react";

const TrustBadge = ({
  icon,
  label,
}: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 text-white/90">
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
      {icon}
    </span>
    <span className="font-body text-sm font-medium tracking-wide">{label}</span>
  </div>
);

const StarRating = ({ rating }: { rating: string }) => (
  <div
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
    data-ocid="hero.rating_badge"
  >
    <div className="flex gap-0.5" aria-label={`${rating} star rating`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          className="w-4 h-4 fill-[#FF7A00]"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <span className="font-body font-bold text-white text-sm">{rating}</span>
    <span className="font-body text-white/70 text-xs">Google Rating</span>
  </div>
);

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToAdmission = () => {
    document
      .getElementById("admission")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B3C5D 0%, #0d4d78 45%, #0e3a60 100%)",
      }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#FF7A00]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge above heading */}
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"
            aria-hidden="true"
          />
          <span className="font-body text-xs font-semibold text-[#FF7A00] uppercase tracking-widest">
            Karawal Nagar, Delhi
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Upgrade Your Skills with{" "}
          <span className="relative inline-block" style={{ color: "#FF7A00" }}>
            LS Digital Academy
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 rounded-full"
              style={{ background: "#FF7A00", opacity: 0.5 }}
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`font-body text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          Job-Oriented Computer Courses in Karawal Nagar, Delhi.
          <br className="hidden sm:block" />
          <span className="text-white/60 text-base sm:text-lg">
            Practical training. Real certifications. Career support.
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <button
            type="button"
            onClick={scrollToAdmission}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-body font-bold text-white text-base transition-smooth hover:opacity-90 hover:scale-105 shadow-lg shadow-[#FF7A00]/25 focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:outline-none"
            style={{ background: "linear-gradient(135deg, #FF7A00, #e86d00)" }}
            data-ocid="hero.enroll_button"
          >
            Enroll Now — It's Free to Apply
          </button>
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-body font-bold text-white text-base border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-smooth hover:bg-white/20 hover:border-white/50 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            data-ocid="hero.call_button"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-white"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Star rating */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <StarRating rating={siteConfig.rating} />
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "480ms" }}
        >
          <div
            className="h-px w-12 bg-white/20 hidden sm:block"
            aria-hidden="true"
          />
          <TrustBadge
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            }
            label="Certified Courses"
          />
          <span className="w-px h-6 bg-white/20" aria-hidden="true" />
          <TrustBadge
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
            }
            label="Affordable Fees"
          />
          <div
            className="h-px w-12 bg-white/20 hidden sm:block"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          className="w-full fill-background"
          preserveAspectRatio="none"
          style={{ height: 48 }}
          aria-hidden="true"
        >
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
