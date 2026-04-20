import type { Course, Degree, SiteConfig, Testimonial, WhyCard } from "@/types";

export const siteConfig: SiteConfig = {
  name: "LS Digital Academy",
  tagline: "Job-Ready Skills. Certified Training. Real Results.",
  phone: "+91-9873768096",
  whatsapp: "919873768096",
  address:
    "F-16, Karawal Nagar Main Road, Opposite Lal Mandir, Dayalpur Extension, Delhi – 110090, India",
  addressShort: "F-16, Karawal Nagar Main Road, Delhi – 110090",
  email: "info@lsdigitalacademy.in",
  rating: "4.8",
  mapUrl:
    "https://maps.google.com/maps?q=Karawal+Nagar+Main+Road,+Delhi+110090&output=embed",
};

export const courses: Course[] = [
  {
    id: "basic-computer",
    name: "Basic Computer Course",
    duration: "1 Month",
    skills: ["Windows", "MS Office", "Internet Basics", "Email", "Typing"],
    careerScope: "Office Assistant, Data Entry, Govt. Jobs",
    price: "₹799",
    icon: "Monitor",
  },
  {
    id: "advanced-excel",
    name: "Advanced Excel with AI",
    duration: "2 Months",
    skills: [
      "Formulas & Functions",
      "Pivot Tables",
      "Power BI",
      "AI Tools",
      "Data Analysis",
    ],
    careerScope: "Data Analyst, Accountant, MIS Executive",
    price: "₹1,999",
    icon: "BarChart2",
  },
  {
    id: "tally-prime",
    name: "Tally Prime (GST)",
    duration: "2 Months",
    skills: [
      "Accounting Entries",
      "GST Filing",
      "Payroll",
      "Inventory",
      "Reports",
    ],
    careerScope: "Accountant, GST Consultant, Finance Executive",
    price: "₹1,999",
    icon: "Calculator",
  },
  {
    id: "dca",
    name: "DCA / ADCA",
    duration: "3–6 Months",
    skills: [
      "MS Office",
      "Tally",
      "Internet",
      "C Language",
      "Practical Projects",
    ],
    careerScope: "Office Administrator, Computer Operator, Govt. Jobs",
    price: "₹2,499",
    icon: "GraduationCap",
  },
  {
    id: "photoshop",
    name: "Photoshop & Graphic Design",
    duration: "2 Months",
    skills: [
      "Photo Editing",
      "Logo Design",
      "Retouching",
      "Compositions",
      "Social Media Graphics",
    ],
    careerScope: "Graphic Designer, Photo Editor, Freelancer",
    price: "₹1,499",
    icon: "Palette",
  },
  {
    id: "coreldraw",
    name: "CorelDRAW",
    duration: "2 Months",
    skills: [
      "Vector Graphics",
      "Print Design",
      "Branding",
      "Flyers",
      "Banner Design",
    ],
    careerScope: "Print Designer, Branding Expert, Ad Agency",
    price: "₹1,499",
    icon: "PenTool",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    duration: "2 Months",
    skills: [
      "Vector Illustration",
      "Logo Design",
      "Typography",
      "Icon Design",
      "Infographics",
    ],
    careerScope: "Illustrator, Brand Designer, UI Artist",
    price: "₹1,499",
    icon: "Brush",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Digital Marketing",
    duration: "3 Months",
    skills: [
      "Shopify",
      "Amazon Seller",
      "SEO",
      "Social Media Ads",
      "Google Ads",
    ],
    careerScope: "Digital Marketer, Online Seller, Startup Founder",
    price: "₹1,999",
    icon: "ShoppingCart",
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking (Basic)",
    duration: "2 Months",
    skills: [
      "Cyber Security Basics",
      "Network Security",
      "Kali Linux",
      "Ethical Hacking Tools",
      "Vulnerability Testing",
    ],
    careerScope: "Cyber Security Analyst, IT Security, Govt. Sector",
    price: "₹1,999",
    icon: "Shield",
  },
  {
    id: "autocad",
    name: "AutoCAD",
    duration: "3 Months",
    skills: [
      "2D Drafting",
      "3D Modeling",
      "Blueprints",
      "Civil/Mechanical Drawing",
      "Project Files",
    ],
    careerScope: "CAD Technician, Civil Engineer, Architect",
    price: "₹2,499",
    icon: "Compass",
  },
  {
    id: "web-designing",
    name: "Web Designing",
    duration: "3 Months",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WordPress"],
    careerScope: "Web Designer, Front-End Developer, Freelancer",
    price: "₹1,999",
    icon: "Code2",
  },
];

export const degrees: Degree[] = [
  { id: "ba", name: "B.A.", level: "UG" },
  { id: "ma", name: "M.A.", level: "PG" },
  { id: "bcom", name: "B.Com", level: "UG" },
  { id: "mcom", name: "M.Com", level: "PG" },
  { id: "bba", name: "BBA", level: "UG" },
  { id: "mba", name: "MBA", level: "PG" },
  { id: "bca", name: "BCA", level: "UG" },
  { id: "mca", name: "MCA", level: "PG" },
  { id: "btech", name: "B.Tech", level: "UG" },
  { id: "mtech", name: "M.Tech", level: "PG" },
  { id: "llb", name: "LLB", level: "Professional" },
  { id: "llm", name: "LLM", level: "Professional" },
  { id: "bed", name: "B.Ed", level: "Professional" },
  { id: "med", name: "M.Ed", level: "Professional" },
  { id: "bsc", name: "B.Sc", level: "UG" },
  { id: "msc", name: "M.Sc", level: "PG" },
];

export const whyCards: WhyCard[] = [
  {
    id: "practical",
    icon: "Laptop",
    title: "Practical Training",
    description:
      "Hands-on, project-based learning. Every skill you gain is immediately applied in real-world scenarios to make you job-ready.",
  },
  {
    id: "trainers",
    icon: "Users",
    title: "Experienced Trainers",
    description:
      "Learn from industry professionals with years of experience who simplify complex concepts into easy-to-understand lessons.",
  },
  {
    id: "affordable",
    icon: "BadgeIndianRupee",
    title: "Affordable Fees",
    description:
      "Premium quality training at the most competitive prices in Karawal Nagar. Flexible payment options available.",
  },
  {
    id: "career",
    icon: "TrendingUp",
    title: "Career Guidance",
    description:
      "Dedicated placement support, resume building, and interview preparation to help you land your first or next job.",
  },
  {
    id: "environment",
    icon: "Heart",
    title: "Friendly Environment",
    description:
      "A welcoming, supportive atmosphere that motivates you to learn, grow, and succeed. No student is left behind.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    course: "Advanced Excel with AI",
    review:
      "LS Digital Academy is hands down the best computer institute in Karawal Nagar. My Excel skills improved dramatically and I got a job as a data analyst within a month of completing the course.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul Verma",
    course: "Tally Prime (GST)",
    review:
      "Very practical and job-focused training. The faculty explains every concept with real business examples. I am now working as an accountant at a reputed firm. Highly recommend!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anjali Gupta",
    course: "Web Designing",
    review:
      "I had zero coding knowledge when I joined. The patient teachers and hands-on projects made everything easy to understand. Now I freelance as a web designer and earn well.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Vikram Singh",
    course: "DCA / ADCA",
    review:
      "Affordable fees, excellent faculty, and a very friendly atmosphere. The DCA course covered everything I needed for government job exams. Best decision I ever made!",
    rating: 5,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Degrees", href: "#degrees" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
