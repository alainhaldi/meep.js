import { LucideClipboardList } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="sticky top-0 z-50 h-12 flex items-center px-4 border-b bg-white">
      <div className="flex gap-2">
        <LucideClipboardList className="h-8" />
        <p className="text-2xl font-bold">Meep</p>
      </div>
    </div>
  );
};

export default AppHeader;
