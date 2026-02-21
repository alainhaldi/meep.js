import { LucidePackagePlus } from "lucide-react";
import IconAndButton from "@/components/icon-and-button";
import { upsertProjectPath } from "@/path";

const ProjectsBar = () => {
  return (
    <div className="flex self-center max-w-3xl w-full justify-between items-center border-b border-secondary py-4">
      <p className="text-2xl">Projects</p>
      <IconAndButton
        href={upsertProjectPath()}
        icon={<LucidePackagePlus />}
        label="New Project"
      ></IconAndButton>
    </div>
  );
};

export default ProjectsBar;
