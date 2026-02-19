"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { projectsPath } from "@/path";

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
  redirect(projectsPath());
};
