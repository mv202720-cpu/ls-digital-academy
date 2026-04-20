import { navLinks, siteConfig } from "@/data/content";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
  ...navLinks,
  { label: "Testimonials", href: "#testimonials" },
  { label: "Admission", href: "#admission" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#0B3C5D" }}
      data-ocid="footer.section"
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight">
              LS Digital Academy
            </h2>
            {/* Orange accent underline */}
            <div
              className="h-[3px] w-16 mt-1 rounded-full"
              style={{ backgroundColor: "#FF7A00" }}
            />
          </div>
          <p
            className="font-body text-sm font-semibold tracking-wide"
            style={{ color: "#FF7A00" }}
          >
            Empowering Students with Digital Skills
          </p>
          <p
            className="font-body text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            A trusted, job-oriented computer training institute in Karawal
            Nagar, Delhi. We provide practical, affordable, and certified
            courses to help students and job seekers build real-world digital
            skills and secure rewarding careers.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <div
            className="h-[2px] w-10 mb-5 rounded-full"
            style={{ backgroundColor: "#FF7A00" }}
          />
          <ul className="flex flex-col gap-2" data-ocid="footer.quick_links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="font-body text-sm transition-smooth hover:text-white flex items-center gap-2 group"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-smooth group-hover:scale-125"
                    style={{ backgroundColor: "#FF7A00" }}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <div
            className="h-[2px] w-10 mb-5 rounded-full"
            style={{ backgroundColor: "#FF7A00" }}
          />
          <ul className="flex flex-col gap-4">
            {/* Address */}
            <li className="flex items-start gap-3">
              <MapPin
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: "#FF7A00" }}
                aria-hidden="true"
              />
              <address
                className="font-body text-sm not-italic leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {siteConfig.address}
              </address>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "#FF7A00" }}
                aria-hidden="true"
              />
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                className="font-body text-sm transition-smooth hover:text-white"
                style={{ color: "rgba(255,255,255,0.75)" }}
                data-ocid="footer.phone_link"
              >
                {siteConfig.phone}
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20courses%20at%20LS%20Digital%20Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold text-white transition-smooth hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="footer.whatsapp_button"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © {year} LS Digital Academy. All rights reserved.
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Karawal Nagar, Delhi
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:text-white underline-offset-2 hover:underline"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
