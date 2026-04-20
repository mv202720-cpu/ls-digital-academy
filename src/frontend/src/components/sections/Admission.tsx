import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/data/content";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  course: string;
}

const INITIAL: FormState = { name: "", phone: "", course: "" };

export function Admission() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[\d\s\+\-]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.course) e.course = "Please select a course";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(INITIAL);
    setErrors({});
  }

  return (
    <section
      id="admission"
      className="py-20"
      style={{ backgroundColor: "#0B3C5D" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(255,122,0,0.2)", color: "#FF7A00" }}
          >
            Join Us Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Admission Open
          </h2>
          <p className="mt-3 text-blue-200 font-body text-base">
            Take the first step toward a job-ready career. Fill out the form and
            we'll get in touch.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center py-10 gap-4 text-center"
              data-ocid="admission.success_state"
            >
              <CheckCircle className="w-14 h-14 text-green-400" />
              <p className="font-display text-xl font-semibold text-white">
                Application Submitted!
              </p>
              <p className="font-body text-blue-100">
                We will contact you shortly.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-2 border-white/40 text-white hover:bg-white/10 font-body"
                onClick={() => setSubmitted(false)}
              >
                Submit Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="adm-name"
                  className="text-white/90 font-body text-sm font-medium"
                >
                  Full Name
                </Label>
                <Input
                  id="adm-name"
                  type="text"
                  placeholder="e.g. Rahul Kumar"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent font-body h-11"
                  data-ocid="admission.name_input"
                  aria-describedby={errors.name ? "adm-name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="adm-name-error"
                    className="text-red-300 text-xs font-body"
                    data-ocid="admission.name.field_error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="adm-phone"
                  className="text-white/90 font-body text-sm font-medium"
                >
                  Phone Number
                </Label>
                <Input
                  id="adm-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent font-body h-11"
                  data-ocid="admission.phone_input"
                  aria-describedby={
                    errors.phone ? "adm-phone-error" : undefined
                  }
                />
                {errors.phone && (
                  <p
                    id="adm-phone-error"
                    className="text-red-300 text-xs font-body"
                    data-ocid="admission.phone.field_error"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Course */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="adm-course"
                  className="text-white/90 font-body text-sm font-medium"
                >
                  Select Course
                </Label>
                <Select
                  value={form.course}
                  onValueChange={(val) =>
                    setForm((f) => ({ ...f, course: val }))
                  }
                >
                  <SelectTrigger
                    id="adm-course"
                    className="bg-white/10 border-white/30 text-white data-[placeholder]:text-white/40 focus:border-accent focus:ring-accent font-body h-11"
                    data-ocid="admission.course_select"
                    aria-describedby={
                      errors.course ? "adm-course-error" : undefined
                    }
                  >
                    <SelectValue placeholder="Choose a course…" />
                  </SelectTrigger>
                  <SelectContent className="font-body">
                    {courses.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p
                    id="adm-course-error"
                    className="text-red-300 text-xs font-body"
                    data-ocid="admission.course.field_error"
                  >
                    {errors.course}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-body font-semibold rounded-xl transition-smooth hover:opacity-90"
                style={{ backgroundColor: "#FF7A00", color: "#fff" }}
                data-ocid="admission.submit_button"
              >
                Apply Now →
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
