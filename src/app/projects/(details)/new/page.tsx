import { CardCompact } from "@/components/card-compact";
import { ProjectUpsertForm } from "@/features/project/components/project-upsert-form";

const NewProjectPage = () => {
  return (
    <CardCompact
      title="Create Project"
      description="A new project will be created"
      className="w-full max-w-3xl self-center"
      content={<ProjectUpsertForm />}
    />
  );
};

export default NewProjectPage;
