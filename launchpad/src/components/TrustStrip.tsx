import { Brain, Cloud, Shield, Users } from "lucide-react";

const badges = [
  { icon: Cloud, label: "Azure OpenAI" },
  { icon: Brain, label: "Azure ML" },
  { icon: Users, label: "Clinician-in-Loop" },
  { icon: Shield, label: "Research Only" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/50 bg-secondary/30">
      <div className="container py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
