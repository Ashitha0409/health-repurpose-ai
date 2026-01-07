import { useOutletContext } from "react-router-dom";
import DiseaseContextCard from "@/components/dashboard/DiseaseContextCard";
import HypothesesTable from "@/components/dashboard/HypothesesTable";
import ValidationRequestPanel from "@/components/dashboard/ValidationRequestPanel";
import ComparisonPanel from "@/components/dashboard/ComparisonPanel";
import ClinicianDashboard from "@/components/dashboard/ClinicianDashboard";
import SafetyBanner from "@/components/dashboard/SafetyBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardContext {
  selectedDisease: string;
  role: "researcher" | "clinician";
}

const Dashboard = () => {
  const { selectedDisease, role } = useOutletContext<DashboardContext>();

  // Show clinician-specific dashboard
  if (role === "clinician") {
    return <ClinicianDashboard selectedDisease={selectedDisease} />;
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-2">
        <h1 className="text-2xl font-semibold text-foreground">
          NTD Research Decision Workspace
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Decision-support for early-stage research prioritization under evidence uncertainty. Not a clinical or prescribing system.
        </p>
      </div>

      <SafetyBanner />

      {/* Section A: Disease Context */}
      <DiseaseContextCard disease={selectedDisease} />

      {/* Section B: AI Hypotheses */}
      <HypothesesTable />

      {/* Sections C & D: Side by side on larger screens */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Section C: Validation Request */}
        <ValidationRequestPanel />

        {/* Section D: Before/After Comparison */}
        <ComparisonPanel />
      </div>

      {/* Decision Support Summary */}
      <Card className="card-elevated border-l-4 border-l-azure">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            Decision Support Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This platform does not recommend actions or treatments. It supports transparent comparison of research options by making uncertainty, assumptions, and evidence gaps explicit.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
