import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectCreateForm from "@/features/project/components/project-create-form";

const AddProjectPage = () => {
  return (
    <Card className="w-full max-w-3xl self-center">
      <CardHeader>
        <CardTitle>Create a Project</CardTitle>
        <CardDescription>This will create a new project.</CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectCreateForm></ProjectCreateForm>
      </CardContent>
    </Card>
  );
};

export default AddProjectPage;
