import { Beaker, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-4 mt-4">
        <div className="glass-card container flex h-16 items-center justify-between rounded-2xl px-6 shadow-medium">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Beaker className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">
                RepurposeAI Hub
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                AI Hypotheses → Clinician Validated
              </span>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="lg" className="gap-2">
              <Rocket className="h-4 w-4" />
              <span className="hidden sm:inline">Launch Dashboard</span>
              <span className="sm:hidden">Launch</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
