import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComparisonMetric {
  label: string;
  before: number | string;
  after: number | string;
  improved: boolean;
  unit?: string;
}

const comparisonData: ComparisonMetric[] = [
  {
    label: "AI Confidence",
    before: 65,
    after: 82,
    improved: true,
    unit: "%",
  },
  {
    label: "Priority Rank",
    before: 4,
    after: 2,
    improved: true,
  },
  {
    label: "Feasibility Risk",
    before: "High",
    after: "Medium",
    improved: true,
  },
  {
    label: "Evidence Quality",
    before: "Moderate",
    after: "Strong",
    improved: true,
  },
];

const ComparisonPanel = () => {
  return (
    <Card className="card-elevated animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          Before vs After Validation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {comparisonData.map((metric, index) => (
            <div
              key={metric.label}
              className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Before */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Before</p>
                <p className="font-medium text-muted-foreground">
                  {metric.before}
                  {metric.unit}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    metric.improved
                      ? "bg-success/10 text-success"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* After */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">After</p>
                <p
                  className={`font-semibold ${
                    metric.improved ? "text-success" : "text-destructive"
                  }`}
                >
                  {metric.after}
                  {metric.unit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Human feedback impact:
              </span>{" "}
              26% improvement in confidence score
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonPanel;
