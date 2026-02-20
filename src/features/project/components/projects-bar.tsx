import { LucidePackagePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { upsertProjectPath } from "@/path";

const ProjectsBar = () => {
  return (
    <div className="flex self-center max-w-3xl w-full justify-between items-center border-b border-secondary py-4">
      <p className="text-2xl">Projects</p>
      <Button asChild variant="default">
        <Link href={upsertProjectPath()}>
          <div className="flex gap-x-2 items-center ">
            <LucidePackagePlus className="h-4 w-4" />
            <p>New Project</p>
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default ProjectsBar;
