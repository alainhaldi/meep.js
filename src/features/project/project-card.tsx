import { LucideLoader } from "lucide-react";
import Link from "next/link";
import { Project } from "@/app/generated/prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

const AppProjectCard = ({ project }: ProjectCardProps) => {
  const isDone = project.status == "DONE";
  const isOnHold = project.status == "ON_HOLD";
  const isInProgress = project.status == "IN_PROGRESS";
  return (
    <Card className="flex-1 max-w-3xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center justify-between">
          {isDone && (
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Done
            </Badge>
          )}
          {isInProgress && (
            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              In Progress
            </Badge>
          )}
          {isOnHold && (
            <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              On Hold
            </Badge>
          )}
          <Button variant={"outline"}>
            <Link href="/project">View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
