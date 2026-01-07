import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Transformed our repurposing workflow. We're generating 3x more validated hypotheses with the same team size.",
    author: "Dr. Sarah Chen",
    role: "Lead Researcher, Stanford Medicine",
    avatar: "SC",
  },
  {
    quote: "The clinician feedback loop is exactly what we needed. No more spreadsheets and email chains.",
    author: "Dr. Michael Roberts",
    role: "Clinical Director, Mayo Clinic",
    avatar: "MR",
  },
  {
    quote: "Finally, AI that respects the research process. The confidence scores help us prioritize effectively.",
    author: "Dr. Emily Watson",
    role: "Head of Drug Discovery, Pfizer",
    avatar: "EW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-hero-soft py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by <span className="text-gradient">Researchers</span>
          </h2>
          <p className="text-muted-foreground">What healthcare professionals are saying</p>
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card hover-lift group relative rounded-2xl p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-glow">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="mb-6 pt-4 text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
