import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Lightbulb,
  ClipboardCheck,
  BarChart3,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Lightbulb, label: "AI Hypotheses", path: "/hypotheses" },
  { icon: ClipboardCheck, label: "Clinician Validation", path: "/validation" },
  { icon: BarChart3, label: "Insights", path: "/insights" },
  { icon: Info, label: "About / Architecture", path: "/about" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-56 bg-sidebar border-r border-sidebar-border flex flex-col py-4 shrink-0">
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-sidebar-border mt-auto">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
          <span>Azure Connected</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
