import { siteConfig } from "@/data/content";
import { Phone } from "lucide-react";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      aria-label="Call LS Digital Academy"
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 rounded-full shadow-xl font-body font-semibold text-white text-sm transition-smooth hover:opacity-90 active:scale-95"
      style={{ backgroundColor: "#FF7A00" }}
      data-ocid="mobile.call_button"
    >
      <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
