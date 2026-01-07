import { AnimatedCounter } from "./AnimatedCounter";
import { FlaskConical, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    icon: FlaskConical,
    value: 500,
    suffix: "+",
    label: "Drugs Analyzed",
    color: "primary" as const,
  },
  {
    icon: TrendingUp,
    value: 82,
    suffix: "%",
    label: "Avg Confidence Boost",
    color: "accent" as const,
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Validation Turnaround",
    color: "gold" as const,
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              accent: "bg-accent/10 text-accent",
              gold: "bg-gold/10 text-gold",
            };
            const textColor = {
              primary: "text-gradient",
              accent: "text-accent",
              gold: "text-gradient-gold",
            };

            return (
              <div
                key={index}
                className="group relative text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${colorClasses[stat.color]} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className={`mb-2 text-4xl font-extrabold md:text-5xl ${textColor[stat.color]}`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
