import prisma from "@/lib/prisma";

export const getProjects = async () => {
  const [projects] = await Promise.all([
    prisma.project.findMany({
      orderBy: { title: "desc" },
    }),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);

  return projects;
  // return await prisma.project.findMany({
  //   orderBy: { title: "desc" },
  // });
};
