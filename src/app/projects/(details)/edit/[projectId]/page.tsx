import { notFound } from "next/navigation";
import { CardCompact } from "@/components/card-compact";
import { ProjectUpsertForm } from "@/features/project/components/project-upsert-form";
import { getProject } from "@/features/project/queries/get-project";

type EditProjectPageProps = {
  params: {
    projectId: string;
  };
};

const EditProjectPage = async ({ params }: EditProjectPageProps) => {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <CardCompact
      title="Edit Project"
      description="Update the project"
      className="w-full max-w-3xl self-center"
      content={<ProjectUpsertForm project={project} />}
    />
  );
};

export default EditProjectPage;
