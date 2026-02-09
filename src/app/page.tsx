import { LucideClipboardList } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className=" h-12 flex items-center px-4 border-b">
        <div className="flex gap-2">
          <LucideClipboardList className="h-8" />
          <p className="text-2xl font-bold">Tarea</p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <p className="text-2xl">
          This will soon become a project and task tracker app 🗂️
        </p>
      </div>
    </div>
  );
}
