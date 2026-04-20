import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/content";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "shadow-lg" : ""}`}
      style={{ backgroundColor: "#0B3C5D" }}
      data-ocid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2"
          data-ocid="navbar.logo_link"
          aria-label="Go to homepage"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#FF7A00" }}
          >
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-white font-bold text-lg leading-tight">
            LS <span style={{ color: "#FF7A00" }}>Digital</span> Academy
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-body font-medium text-white/80 hover:text-white rounded-md transition-smooth hover:bg-white/10"
              data-ocid={`navbar.nav_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
          <Button
            type="button"
            onClick={() => scrollTo("#admission")}
            className="ml-4 font-body font-semibold text-white transition-smooth hover:opacity-90"
            style={{ backgroundColor: "#FF7A00", borderColor: "transparent" }}
            data-ocid="navbar.enroll_button"
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-smooth"
              aria-label="Open menu"
              data-ocid="navbar.mobile_menu_button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l-0 p-0"
            style={{ backgroundColor: "#0B3C5D" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
              <span className="font-display text-white font-bold text-base">
                LS <span style={{ color: "#FF7A00" }}>Digital</span> Academy
              </span>
              <SheetClose asChild>
                <button
                  type="button"
                  className="p-1.5 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-smooth"
                  aria-label="Close menu"
                  data-ocid="navbar.mobile_close_button"
                >
                  <X className="w-5 h-5" />
                </button>
              </SheetClose>
            </div>
            <nav className="flex flex-col px-4 pt-4 gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-base font-body font-medium text-white/80 hover:text-white rounded-lg transition-smooth hover:bg-white/10"
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  type="button"
                  onClick={() => scrollTo("#admission")}
                  className="w-full font-body font-semibold text-white transition-smooth hover:opacity-90"
                  style={{
                    backgroundColor: "#FF7A00",
                    borderColor: "transparent",
                  }}
                  data-ocid="navbar.mobile_enroll_button"
                >
                  Enroll Now
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
