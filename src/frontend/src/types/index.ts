export interface Course {
  id: string;
  name: string;
  duration: string;
  skills: string[];
  careerScope: string;
  price: string;
  icon: string;
}

export interface Degree {
  id: string;
  name: string;
  level: "UG" | "PG" | "Professional";
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  review: string;
  rating: number;
}

export interface WhyCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  addressShort: string;
  email: string;
  rating: string;
  mapUrl: string;
}
