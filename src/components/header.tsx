import { LucideClipboardList } from "lucide-react";
import { ThemeSwitcher } from "./theme/theme-switcher";

const AppHeader = () => {
  return (
    <div className="sticky top-0 z-50 h-12 flex items-center justify-between px-4 border-b">
      <div className="flex gap-2">
        <LucideClipboardList className="h-8" />
        <p className="text-2xl font-bold">Meep</p>
      </div>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default AppHeader;
