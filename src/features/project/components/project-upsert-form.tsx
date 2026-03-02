"use client";

import { useActionState } from "react";
import { Project } from "@/app/generated/prisma/client";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertProject } from "../actions/upsert-project";

type ProjectUpsertFormProps = {
  project?: Project;
};

const ProjectUpsertForm = ({ project }: ProjectUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertProject.bind(null, project?.id),
    // Use the empty state as initial before the form ever got submitted
    EMPTY_ACTION_STATE,
  );

  return (
    <Form action={action} actionState={actionState}>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? project?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={
          (actionState.payload?.get("description") as string) ??
          project?.description
        }
      />
      <FieldError actionState={actionState} name="description" />

      <SubmitButton label={project ? "Edit" : "Create"} />
    </Form>
  );
};

export { ProjectUpsertForm };
