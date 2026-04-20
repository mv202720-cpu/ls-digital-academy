import { testimonials } from "@/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {["s1", "s2", "s3", "s4", "s5"].map((sid, i) => (
        <svg
          key={sid}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "fill-accent" : "fill-muted"}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-lg shrink-0"
      style={{ backgroundColor: "#0B3C5D" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-background"
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Student Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-base max-w-xl mx-auto">
            Real experiences from students who transformed their careers at LS
            Digital Academy.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {["s1", "s2", "s3", "s4", "s5"].map((sid) => (
                <svg
                  key={sid}
                  viewBox="0 0 20 20"
                  className="w-5 h-5 fill-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-body font-bold text-foreground">4.8</span>
            <span className="font-body text-muted-foreground text-sm">
              Google Rating
            </span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="testimonials.list"
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="card-hover bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
              data-ocid={`testimonials.item.${index + 1}`}
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <blockquote className="font-body text-sm text-muted-foreground italic leading-relaxed flex-1">
                "{t.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <InitialsAvatar name={t.name} />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground text-sm leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-accent font-medium truncate mt-0.5">
                    {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
