import { MapPin, AlertTriangle, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DiseaseContextCardProps {
  disease: string;
}

const diseaseData: Record<
  string,
  { name: string; region: string; challenge: string }
> = {
  dengue: {
    name: "Dengue Fever",
    region: "Southeast Asia, Latin America, Africa",
    challenge:
      "No approved antiviral treatment exists. Current therapy is supportive only. Severe cases can lead to hemorrhagic fever.",
  },
  malaria: {
    name: "Malaria",
    region: "Sub-Saharan Africa, South Asia",
    challenge:
      "Growing resistance to artemisinin-based treatments. Need for new drug candidates with novel mechanisms of action.",
  },
  zika: {
    name: "Zika Virus",
    region: "Americas, Pacific Islands, Southeast Asia",
    challenge:
      "No specific treatment available. Associated with birth defects. Vaccine development ongoing but not yet approved.",
  },
  chikungunya: {
    name: "Chikungunya",
    region: "Africa, Asia, Indian Subcontinent, Americas",
    challenge:
      "No approved vaccines or antivirals. Chronic joint pain persists in 40% of patients. Limited therapeutic options.",
  },
  tuberculosis: {
    name: "Tuberculosis",
    region: "Global, highest burden in Asia and Africa",
    challenge:
      "Multi-drug resistant strains increasing. Current treatment requires 6+ months. Need for shorter, more effective regimens.",
  },
};

const DiseaseContextCard = ({ disease }: DiseaseContextCardProps) => {
  const data = diseaseData[disease] || diseaseData.dengue;

  return (
    <Card className="card-elevated animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-primary" />
          </div>
          Disease Context
        </CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Disease Name
          </label>
          <p className="text-foreground font-medium">{data.name}</p>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            Region Focus
          </label>
          <p className="text-foreground font-medium text-sm">{data.region}</p>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-3 h-3" />
            Current Challenge
          </label>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {data.challenge}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiseaseContextCard;
