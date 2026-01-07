import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [selectedDisease, setSelectedDisease] = useState("dengue");
  const [role, setRole] = useState<"researcher" | "clinician">("researcher");
  const location = useLocation();

  // Automatically set role based on URL path
  useEffect(() => {
    if (location.pathname.includes("/clinician")) {
      setRole("clinician");
    } else if (location.pathname.includes("/researcher")) {
      setRole("researcher");
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav
        selectedDisease={selectedDisease}
        onDiseaseChange={setSelectedDisease}
        role={role}
        onRoleChange={setRole}
      />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet context={{ selectedDisease, role }} />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
