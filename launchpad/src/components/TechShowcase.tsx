import { useState } from "react";
import { Brain, Cloud, Database, ShieldCheck, Cpu } from "lucide-react";

const techBadges = [
  {
    icon: Cloud,
    name: "Azure OpenAI",
    description: "GPT-4 powered hypothesis generation",
  },
  {
    icon: Brain,
    name: "Azure ML",
    description: "Custom models for drug-disease matching",
  },
  {
    icon: Database,
    name: "Health Data Services",
    description: "FHIR-compliant data handling",
  },
  {
    icon: ShieldCheck,
    name: "Azure Security",
    description: "HIPAA-ready infrastructure",
  },
  {
    icon: Cpu,
    name: "Cognitive Search",
    description: "Semantic literature indexing",
  },
];

export function TechShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Powered by <span className="text-gradient">Azure</span>
          </h2>
          <p className="text-muted-foreground">Enterprise-grade infrastructure for healthcare research</p>
        </div>

        {/* Tech Badges Carousel */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {techBadges.map((badge, index) => {
            const Icon = badge.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`glass-card glow-border flex cursor-pointer items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isHovered ? "bg-primary/5 shadow-glow" : ""
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                    isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{badge.name}</p>
                    <p className={`text-xs transition-all duration-300 ${
                      isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0 md:max-h-10 md:opacity-100"
                    } overflow-hidden text-muted-foreground`}>
                      {badge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
