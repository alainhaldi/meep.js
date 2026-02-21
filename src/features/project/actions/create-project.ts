"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { projectsPath } from "@/path";

export const createProject = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  await prisma.project.create({
    data: {
      title: data.title as string,
      description: data.description as string,
      projectNumber: "1002568",
      budgetAt: 15000,
      budgetCap: 25000,
      contactEmail: "tom.weasley@hogwarts.uk",
      documentLink: "www.google.com",
      currentStatus: "Project up and running.",
      nextSteps: "Waiting for feedback from Dobby",
    },
  });

  redirect(projectsPath());
};
