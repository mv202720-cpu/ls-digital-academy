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
import { Textarea } from "@/components/ui/textarea";
import { courses, siteConfig } from "@/data/content";
import { CheckCircle, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

interface ContactForm {
  name: string;
  phone: string;
  course: string;
  message: string;
}

const INITIAL: ContactForm = { name: "", phone: "", course: "", message: "" };

const WA_MESSAGE = encodeURIComponent(
  "Hello, I want to know about courses at LS Digital Academy",
);

export function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  function validate(): boolean {
    const e: Partial<ContactForm> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[\d\s\+\-]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(INITIAL);
    setErrors({});
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
            We're Here for You
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-base max-w-xl mx-auto">
            Visit us, call us, or send a message — we'll respond within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6" data-ocid="contact.info_panel">
            {/* Address */}
            <div className="flex gap-4 items-start bg-card rounded-2xl border border-border p-5 shadow-sm">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#0B3C5D" }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="font-body font-semibold text-foreground text-sm mb-1">
                  Our Address
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Call + WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl font-body font-semibold text-sm text-white transition-smooth hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "#0B3C5D" }}
                data-ocid="contact.call_button"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl font-body font-semibold text-sm text-white transition-smooth hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="contact.whatsapp_button"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Chat
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] w-full bg-muted">
              <iframe
                title="LS Digital Academy Location"
                src={siteConfig.mapUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8"
            data-ocid="contact.form_panel"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle className="w-14 h-14 text-green-500" />
                <p className="font-display text-xl font-semibold text-foreground">
                  Message Sent!
                </p>
                <p className="font-body text-muted-foreground">
                  We'll get back to you soon.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2 font-body"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <p className="font-display text-lg font-semibold text-foreground mb-1">
                  Send us a Message
                </p>

                {/* Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ct-name"
                    className="font-body text-sm font-medium"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="ct-name"
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="font-body h-11"
                    data-ocid="contact.name_input"
                    aria-describedby={errors.name ? "ct-name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="ct-name-error"
                      className="text-destructive text-xs font-body"
                      data-ocid="contact.name.field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ct-phone"
                    className="font-body text-sm font-medium"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="ct-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="font-body h-11"
                    data-ocid="contact.phone_input"
                    aria-describedby={
                      errors.phone ? "ct-phone-error" : undefined
                    }
                  />
                  {errors.phone && (
                    <p
                      id="ct-phone-error"
                      className="text-destructive text-xs font-body"
                      data-ocid="contact.phone.field_error"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Course (optional) */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ct-course"
                    className="font-body text-sm font-medium"
                  >
                    Course Interested In{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Select
                    value={form.course}
                    onValueChange={(val) =>
                      setForm((f) => ({ ...f, course: val }))
                    }
                  >
                    <SelectTrigger
                      id="ct-course"
                      className="font-body h-11"
                      data-ocid="contact.course_select"
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
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ct-message"
                    className="font-body text-sm font-medium"
                  >
                    Message{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="ct-message"
                    placeholder="Any questions or specific requirements…"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="font-body resize-none"
                    rows={3}
                    data-ocid="contact.message_textarea"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-body font-semibold rounded-xl transition-smooth hover:opacity-90"
                  style={{ backgroundColor: "#0B3C5D", color: "#fff" }}
                  data-ocid="contact.submit_button"
                >
                  Send Message →
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
