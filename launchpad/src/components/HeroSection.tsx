import { Check, FlaskConical, LineChart, Play } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero pt-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative py-16 md:py-24">
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <FlaskConical className="h-4 w-4" />
            AI-Powered Research Platform
          </div>

          {/* Headline */}
          <h1 
            className="mb-6 text-4xl font-extrabold tracking-tight text-primary-foreground opacity-0 animate-fade-in-up md:text-5xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Accelerate Drug Repurposing{" "}
            <span className="relative">
              Research
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path 
                  d="M2 10C50 4 150 2 298 8" 
                  stroke="hsl(45 90% 55%)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  className="opacity-80"
                />
              </svg>
            </span>{" "}
            <span className="text-gradient-gold">10x</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mx-auto mb-12 max-w-2xl text-lg text-primary-foreground/80 opacity-0 animate-fade-in md:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            AI scans literature + trials → generates hypotheses → clinicians validate → you track impact.
          </p>

          {/* CTAs */}
          <div 
            className="mb-16 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in-up sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" className="shadow-glow">
              Start Research
            </Button>
            <Button variant="glass" size="lg" className="gap-2 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Play className="h-4 w-4" />
              See Demo Video
            </Button>
          </div>
        </div>

        {/* Feature Cards - Glassmorphism */}
        <div 
          className="mx-auto grid max-w-5xl gap-6 opacity-0 animate-fade-in-up md:grid-cols-3"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Card 1: Drug + Confidence */}
          <div className="glass-card hover-lift group rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                <FlaskConical className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Metformin → Alzheimer's</span>
            </div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">AI Confidence</span>
              <span className="font-bold text-primary">68%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-muted">
              <div 
                className="h-full rounded-full bg-gradient-primary transition-all duration-1000 group-hover:w-[75%]"
                style={{ width: "68%" }}
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Based on 147 papers, 12 trials</p>
          </div>

          {/* Card 2: Clinician Feedback */}
          <div className="glass-card hover-lift rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <span className="font-semibold text-foreground">Clinician Review</span>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-accent bg-accent/10">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-foreground">Mechanism plausible</span>
              </label>
              <label className="flex items-center gap-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-accent bg-accent/10">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-foreground">Evidence sufficient</span>
              </label>
              <label className="flex items-center gap-3 text-sm">
                <div className="h-5 w-5 rounded border-2 border-muted-foreground/30" />
                <span className="text-muted-foreground">Recommend trial</span>
              </label>
            </div>
          </div>

          {/* Card 3: Impact Metrics */}
          <div className="glass-card hover-lift rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20">
                <LineChart className="h-5 w-5 text-gold" />
              </div>
              <span className="font-semibold text-foreground">Impact Metrics</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between rounded-lg bg-muted/50 px-3 py-2">
                <span className="text-muted-foreground">Before</span>
                <span className="font-medium text-foreground">23 hypotheses</span>
              </div>
              <div className="flex justify-between rounded-lg bg-gold/10 px-3 py-2">
                <span className="text-gold">After</span>
                <span className="font-bold text-gold">89 hypotheses</span>
              </div>
              <div className="pt-2 text-center text-xs text-muted-foreground">
                <span className="font-bold text-gold">+287%</span> research throughput
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
