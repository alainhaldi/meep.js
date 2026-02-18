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

type ProjectCardProps = {
  project: Project;
};

const AppProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex-1 max-w-3xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center justify-between">
          <StatusBadge status={project.status}></StatusBadge>
          <Button asChild variant={"outline"}>
            <Link href={projectPath(project.id)}>View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
