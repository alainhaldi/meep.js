import { LucideTrash } from "lucide-react";
import Link from "next/link";
import { Project } from "@/app/generated/prisma/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectPath } from "@/path";
import StatusBadge from "../../status-badge";
import { deleteProject } from "../actions/delete-project";

type ProjectCardProps = {
  project: Project;
};

const AppProjectCard = ({ project }: ProjectCardProps) => {
  const deleteButton = (
    <form action={deleteProject.bind(null, project.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  const detailsButton = (
    <Button asChild variant={"outline"}>
      <Link href={projectPath(project.id)}>View details</Link>
    </Button>
  );

  return (
    <Card className="flex-1 max-w-3xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center justify-between">
          <StatusBadge status={project.status}></StatusBadge>
          <div className="flex gap-x-2">
            <div>{deleteButton}</div>
            <div>{detailsButton}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
