import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import ProjectList from "@/features/project/components/project-list";
import ProjectsBar from "@/features/project/components/projects-bar";

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <ProjectsBar></ProjectsBar>
      <Suspense fallback={<Spinner />}>
        <ProjectList></ProjectList>
      </Suspense>
    </div>
  );
}
