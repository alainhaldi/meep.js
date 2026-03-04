"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { projectsPath } from "@/path";

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
  revalidatePath(projectsPath());
  // await setCookieByKey("toast", "Ticket deleted");
  // redirect(projectsPath());
};
