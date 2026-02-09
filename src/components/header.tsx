import { LucideClipboardList } from "lucide-react";

const AppHeader = () => {
  return (
    <div className=" h-12 flex items-center px-4 border-b">
      <div className="flex gap-2">
        <LucideClipboardList className="h-8" />
        <p className="text-2xl font-bold">Meep</p>
      </div>
    </div>
  );
};

export default AppHeader;
