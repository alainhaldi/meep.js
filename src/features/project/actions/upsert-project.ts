"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod/v4";
import { setCookieByKey } from "@/actions/cookies";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { projectPath, projectsPath } from "@/path";

const upsertProjectSchema = z.object({
  title: z.string().min(1, "title can't be empty").max(191),
  description: z.string().min(1, "description can't be empty").max(1024),
  projectNumber: z.string(),
  budgetAt: z.number(),
  budgetCap: z.number(),
  contactEmail: z.string(),
  documentLink: z.string(),
  currentStatus: z.string(),
  nextSteps: z.string(),
});

export const upsertProject = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) => {
  try {
    const data = upsertProjectSchema.parse({
      title: formData.get("title"),
      description: formData.get("description"),
      projectNumber: "1002568",
      budgetAt: 15000,
      budgetCap: 25000,
      contactEmail: "ron.weasley@hogwarts.uk",
      documentLink: "www.google.com",
      currentStatus: "Project up and running.",
      nextSteps: "Waiting for feedback from Dobby",
    });

    await prisma.project.upsert({
      where: { id: id || "" },
      update: data,
      create: data,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(projectsPath());

  if (id) {
    await setCookieByKey("toast", "Ticket edited");
    redirect(projectPath(id));
  } else {
    redirect(projectsPath());
  }

  // Todo: Fix issue
  return toActionState("SUCCESS", "Ticket created");
};
