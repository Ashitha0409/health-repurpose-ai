import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SafetyBanner = () => {
  return (
    <Alert variant="default" className="mb-6 border-amber-200 bg-amber-50 text-amber-900">
      <AlertTriangle className="h-4 w-4 text-amber-600" />
      <AlertTitle className="text-amber-800 font-semibold">
        Research Decision Support Only
      </AlertTitle>
      <AlertDescription className="text-amber-700">
        This system identifies potential signals for investigation based on available data. 
        It is <strong>not</strong> a clinical decision-making tool and should not be used for prescribing or patient care. 
        All signals require independent validation.
      </AlertDescription>
    </Alert>
  );
};

export default SafetyBanner;
