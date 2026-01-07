import { ShieldCheck, FileX, Search, Lock } from "lucide-react";

const trustPoints = [
  { icon: FileX, text: "No Patient Data" },
  { icon: Search, text: "Research Only" },
  { icon: Lock, text: "Auditable AI" },
  { icon: ShieldCheck, text: "HIPAA Ready" },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-accent py-12">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground/20">
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-semibold text-accent-foreground">{point.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
