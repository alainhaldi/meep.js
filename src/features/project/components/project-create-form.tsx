import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProject } from "../actions/create-project";

const CreateProjectForm = () => {
  return (
    <form action={createProject} className="flex flex-col gap-y-4">
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text"></Input>

      <Label htmlFor="description">Description</Label>
      <Input id="description" name="description" type="text"></Input>

      <Button type="submit">Create</Button>
    </form>
  );
};

export default CreateProjectForm;
