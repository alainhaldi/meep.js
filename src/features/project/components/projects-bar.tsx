import { Button } from "@/components/ui/button";

const ProjectsBar = () => {
  return (
    <div className="flex self-center max-w-3xl w-full justify-between items-center border-b border-secondary py-2">
      <p className="text-xl">Projects</p>
      <Button variant="default">Add Project</Button>
    </div>
  );
};

export default ProjectsBar;
