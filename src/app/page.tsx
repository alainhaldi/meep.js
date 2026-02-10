import AppProjectCard from "@/features/project/project-card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany();

  return (
    <div className="p-8 flex justify-center">
      <AppProjectCard></AppProjectCard>
    </div>
  );
}
