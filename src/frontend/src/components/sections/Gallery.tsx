const galleryItems = [
  { label: "Computer Lab", caption: "State-of-the-art computer lab" },
  { label: "Students Learning", caption: "Interactive classroom sessions" },
  { label: "Training Session", caption: "Live practical training" },
  { label: "Classroom", caption: "Modern learning environment" },
  { label: "Practical Session", caption: "Hands-on project work" },
  { label: "Certificate Ceremony", caption: "Student graduation day" },
];

function GalleryPlaceholder({
  label,
  caption,
}: { label: string; caption: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted/40 aspect-[4/3] transition-smooth hover:scale-[1.03] hover:shadow-lg hover:border-accent/40 cursor-pointer">
      {/* SVG placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-smooth group-hover:scale-110"
          style={{ backgroundColor: "#0B3C5D1A" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="none"
            stroke="#0B3C5D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-display font-semibold text-foreground text-sm leading-tight">
            {label}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            {caption}
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,60,93,0.06) 0%, rgba(255,122,0,0.06) 100%)",
        }}
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-muted/30"
      data-ocid="gallery.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Campus Life
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Our Learning Environment
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-base max-w-xl mx-auto">
            Experience a modern, well-equipped campus designed to inspire
            learning and creativity.
          </p>
        </div>

        {/* Gallery grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="gallery.list"
        >
          {galleryItems.map((item, index) => (
            <div key={item.label} data-ocid={`gallery.item.${index + 1}`}>
              <GalleryPlaceholder label={item.label} caption={item.caption} />
            </div>
          ))}
        </div>

        {/* CTA hint */}
        <p className="text-center mt-10 font-body text-sm text-muted-foreground">
          Visit us at{" "}
          <span className="font-semibold text-foreground">
            F-16, Karawal Nagar Main Road, Delhi
          </span>{" "}
          to see our facilities in person.
        </p>
      </div>
    </section>
  );
}
