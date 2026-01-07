import { Brain, FileSpreadsheet, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "AI Discovery",
    description: "AI scans 50M+ papers and clinical trials to identify repurposing candidates.",
    color: "primary" as const,
  },
  {
    icon: FileSpreadsheet,
    title: "Hypothesis Table",
    description: "Structured hypotheses with confidence scores, mechanisms, and evidence links.",
    color: "accent" as const,
  },
  {
    icon: UserCheck,
    title: "Clinician Review",
    description: "Expert validation with structured feedback forms — no patient data involved.",
    color: "green" as const,
  },
  {
    icon: BarChart3,
    title: "Impact Insights",
    description: "Track before/after metrics, citation growth, and validation success rates.",
    color: "gold" as const,
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-hero-soft py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From AI discovery to validated insights in four seamless steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-gold md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              const colorClasses = {
                primary: {
                  bg: "bg-primary",
                  light: "bg-primary/10",
                  text: "text-primary",
                  glow: "shadow-glow",
                },
                accent: {
                  bg: "bg-accent",
                  light: "bg-accent/10",
                  text: "text-accent",
                  glow: "shadow-[0_0_30px_hsl(180_70%_40%/0.3)]",
                },
                green: {
                  bg: "bg-green-500",
                  light: "bg-green-500/10",
                  text: "text-green-500",
                  glow: "shadow-[0_0_30px_hsl(142_70%_45%/0.3)]",
                },
                gold: {
                  bg: "bg-gold",
                  light: "bg-gold/10",
                  text: "text-gold",
                  glow: "shadow-gold",
                },
              };

              const colors = colorClasses[step.color];

              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 opacity-0 animate-fade-in-up md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className={`glass-card hover-lift inline-block rounded-2xl p-6 ${isEven ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.light}`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className="relative z-10 hidden md:block">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} ${colors.glow}`}>
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
