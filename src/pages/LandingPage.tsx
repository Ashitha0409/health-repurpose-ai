import { Link } from "react-router-dom";
import { FlaskConical, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <FlaskConical className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-lg tracking-tight">NTD Research Workspace</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span>Research Decision Support System</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12 flex flex-col items-center justify-center max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Accelerating Drug Repurposing for <br />
            <span className="text-primary">Neglected Tropical Diseases</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An AI-supported decision workspace for prioritizing research candidates under evidence uncertainty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Researcher Card */}
          <Link to="/researcher" className="group">
            <Card className="h-full border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FlaskConical className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Researcher Workspace</CardTitle>
                <CardDescription className="text-base">
                  Explore AI-generated repurposing candidates, analyze evidence gaps, and prioritize signals for investigation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Review candidate signals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Assess evidence uncertainty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Request expert validation
                  </li>
                </ul>
                <Button className="w-full gap-2 group-hover:bg-blue-600">
                  Enter as Researcher <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Clinician Card */}
          <Link to="/clinician" className="group">
            <Card className="h-full border-2 border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Expert Assessment Portal</CardTitle>
                <CardDescription className="text-base">
                  Validate potential signals, identify clinical feasibility gaps, and provide domain expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verify candidate signals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Annotate clinical context
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Guide research prioritization
                  </li>
                </ul>
                <Button className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700">
                  Enter as Clinician <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 text-center text-sm text-muted-foreground max-w-md mx-auto">
          <p className="font-medium text-amber-700/80 mb-1">Research Decision Support Only</p>
          <p className="text-xs">
            This system identifies potential signals for investigation. It is not a clinical decision-making tool and should not be used for prescribing.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
