import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/content";
import type { Course } from "@/types";
import {
  BarChart2,
  Brush,
  Calculator,
  CheckCircle2,
  Code2,
  Compass,
  GraduationCap,
  Monitor,
  Palette,
  PenTool,
  Shield,
  ShoppingCart,
} from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  BarChart2,
  Calculator,
  GraduationCap,
  Palette,
  PenTool,
  Brush,
  ShoppingCart,
  Shield,
  Compass,
  Code2,
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = ICON_MAP[course.icon] ?? Monitor;

  const handleEnroll = () => {
    const el = document.getElementById("admission");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      data-ocid={`courses.item.${index + 1}`}
      className="card-hover flex flex-col rounded-2xl border border-border bg-card shadow-sm overflow-hidden group"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 flex items-start gap-3">
        <span
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "#0B3C5D" }}
        >
          <Icon
            className="w-5 h-5"
            style={{ color: "#FF7A00" }}
            aria-hidden="true"
          />
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-foreground text-base leading-snug line-clamp-2">
            {course.name}
          </h3>
          <Badge
            variant="secondary"
            className="mt-1 text-xs font-body font-medium"
          >
            {course.duration}
          </Badge>
        </div>
      </div>

      {/* Skills */}
      <ul className="px-5 pb-3 flex flex-col gap-1.5 flex-1">
        {course.skills.slice(0, 4).map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2 text-sm text-foreground font-body"
          >
            <CheckCircle2
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "#FF7A00" }}
              aria-hidden="true"
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      {/* Career Scope */}
      <div className="px-5 pb-4">
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          <span className="font-semibold text-foreground">Career:</span>{" "}
          {course.careerScope}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-border flex items-center justify-between gap-3">
        <span
          className="font-display font-bold text-2xl"
          style={{ color: "#FF7A00" }}
        >
          {course.price}
        </span>
        <button
          type="button"
          onClick={handleEnroll}
          data-ocid={`courses.enroll_button.${index + 1}`}
          className="btn-hover px-4 py-2 rounded-lg text-sm font-body font-semibold text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{ backgroundColor: "#FF7A00" }}
        >
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
}

export function Courses() {
  return (
    <section
      id="courses"
      className="py-20 bg-background"
      data-ocid="courses.section"
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
          <p
            className="text-sm font-body font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#FF7A00" }}
          >
            What We Teach
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Courses
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Job-focused, practical computer courses designed for students, job
            seekers, and professionals at every level — with certifications
            included.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
