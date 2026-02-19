"use server"; // Make it back to a server component

import prisma from "@/lib/prisma";

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
};
