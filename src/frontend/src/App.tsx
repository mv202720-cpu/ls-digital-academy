import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCallButton } from "@/components/MobileCallButton";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Admission } from "@/components/sections/Admission";
import { Contact } from "@/components/sections/Contact";
import { Courses } from "@/components/sections/Courses";
import { Degrees } from "@/components/sections/Degrees";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Courses />
        <Degrees />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Admission />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCallButton />
    </div>
  );
}
