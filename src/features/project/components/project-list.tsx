import { getProjects } from "../queries/get-projects";
import AppProjectCard from "./project-card";

const ProjectList = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-4">
      {projects.map((item) => (
        <div key={item.id} className="w-full flex justify-center">
          <AppProjectCard project={item} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
