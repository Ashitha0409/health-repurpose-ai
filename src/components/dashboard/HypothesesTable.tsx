import { ExternalLink, FlaskConical, AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Hypothesis {
  id: string;
  drugName: string;
  source: "literature" | "trial";
  evidenceStrength: number;
  coverage: "Robust" | "Moderate" | "Limited";
  consistency: "Consistent" | "Mixed" | "Conflicting";
  uncertaintyReason?: string;
  status: "needs_review" | "verified" | "low_confidence";
}

const mockHypotheses: Hypothesis[] = [
  {
    id: "1",
    drugName: "Chloroquine",
    source: "literature",
    evidenceStrength: 78,
    coverage: "Robust",
    consistency: "Consistent",
    status: "verified",
  },
  {
    id: "2",
    drugName: "Ivermectin",
    source: "trial",
    evidenceStrength: 65,
    coverage: "Moderate",
    consistency: "Mixed",
    uncertaintyReason: "Conflicting dosage data",
    status: "needs_review",
  },
  {
    id: "3",
    drugName: "Ribavirin",
    source: "literature",
    evidenceStrength: 42,
    coverage: "Limited",
    consistency: "Conflicting",
    uncertaintyReason: "Mechanism unclear",
    status: "low_confidence",
  },
  {
    id: "4",
    drugName: "Favipiravir",
    source: "trial",
    evidenceStrength: 71,
    coverage: "Moderate",
    consistency: "Consistent",
    status: "needs_review",
  },
  {
    id: "5",
    drugName: "Sofosbuvir",
    source: "literature",
    evidenceStrength: 58,
    coverage: "Moderate",
    consistency: "Mixed",
    uncertaintyReason: "In vitro only",
    status: "verified",
  },
];

const getStatusBadge = (status: Hypothesis["status"]) => {
  switch (status) {
    case "needs_review":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 gap-1.5 font-normal">
          <HelpCircle className="w-3 h-3" />
          Pending Expert Verification
        </Badge>
      );
    case "verified":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1.5 font-normal">
          <CheckCircle2 className="w-3 h-3" />
          Signal Verified
        </Badge>
      );
    case "low_confidence":
      return (
        <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 gap-1.5 font-normal">
          <AlertCircle className="w-3 h-3" />
          Low Confidence Signal
        </Badge>
      );
  }
};

const EvidenceStrengthBar = ({ strength, coverage, consistency, reason }: { strength: number, coverage: string, consistency: string, reason?: string }) => {
  const getColor = () => {
    if (strength >= 70) return "bg-blue-500";
    if (strength >= 50) return "bg-blue-400";
    return "bg-blue-300";
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <div className="progress-bar w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${getColor()}`}
            style={{ width: `${strength}%` }}
          />
        </div>
        <span className="text-sm font-medium text-slate-700 w-8">
          {strength}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground items-center">
        <span className="flex items-center gap-1">
          Cov: <span className="font-medium text-foreground">{coverage}</span>
        </span>
        <span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
        <span className="flex items-center gap-1">
          Signal: <span className={`font-medium ${consistency === 'Conflicting' ? 'text-amber-600' : 'text-foreground'}`}>{consistency}</span>
        </span>
        {reason && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                 <HelpCircle className="w-3 h-3 text-slate-400 hover:text-slate-600 transition-colors" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Evidence Gap: {reason}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

const HypothesesTable = () => {
  return (
    <Card className="card-elevated animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            Candidate Research Hypotheses (AI-Supported)
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Export Research Data
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          These hypotheses are synthesized from fragmented evidence and should be interpreted alongside uncertainty indicators and expert context.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Candidate Research Option
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Evidence Profile
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Signal Consistency
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Verification Status
                </th>
              </tr>
            </thead>
            <tbody>
              {mockHypotheses.map((hypothesis, index) => (
                <>
                <tr
                  key={hypothesis.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-4 px-4 max-w-[250px]">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">
                        {hypothesis.drugName}
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">
                        Hypothesis: {hypothesis.drugName} may warrant further investigation.
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-1">
                       <span className="text-xs font-medium">Coverage: {hypothesis.coverage}</span>
                       <span className="text-[10px] text-muted-foreground">
                         {hypothesis.source === "literature" ? "Synthesized from limited studies" : "Based on trial data"}
                       </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                     <div className="flex flex-col gap-1">
                        <span className={`text-xs font-medium ${hypothesis.consistency === 'Conflicting' ? 'text-amber-600' : 'text-foreground'}`}>
                          {hypothesis.consistency}
                        </span>
                        {hypothesis.uncertaintyReason && (
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                             <AlertCircle className="w-3 h-3" />
                             {hypothesis.uncertaintyReason}
                          </span>
                        )}
                     </div>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(hypothesis.status)}
                  </td>
                </tr>
                {/* Detailed Context Row */}
                <tr className="bg-muted/10 border-b border-border/50">
                  <td colSpan={4} className="py-2 px-4">
                     <div className="text-[11px] text-muted-foreground flex gap-4">
                        <span className="font-medium">Why this hypothesis:</span> Synthesized from limited preclinical studies, indirect disease-mechanism overlap, and expert-annotated contextual constraints. Evidence gaps and disagreements are explicitly tracked.
                     </div>
                  </td>
                </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Attribution & Auditability */}
        <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-azure-light text-primary font-medium">
              Research Aid Only
            </span>
            Generated via Azure OpenAI + Azure Machine Learning. These are automated signals, not clinical recommendations.
          </p>
          <div className="text-[10px] text-muted-foreground border-t border-border/50 pt-2 mt-2">
            <strong>Transparency & Auditability:</strong> All AI-generated summaries, uncertainty indicators, and human annotations are logged and traceable for institutional review.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HypothesesTable;
