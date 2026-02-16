import AppProjectCard from "@/features/project/project-card";
import { getProjects } from "@/features/project/queries/get-projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="p-4 flex flex-col gap-4">
      {projects.map((item) => (
        <div key={item.id} className="w-full flex justify-center">
          <AppProjectCard project={item} />
        </div>
      ))}
    </div>
  );
}
