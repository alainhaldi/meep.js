import AppProjectCard from "@/features/project/project-card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany();

  return (
    <div className="p-8 flex flex-col gap-4">
      {projects.map((item) => (
        <div key={item.id} className="w-full flex justify-center">
          <AppProjectCard project={item} />
        </div>
      ))}
    </div>
  );
}
