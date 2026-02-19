import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import ProjectList from "@/features/project/components/project-list";
import ProjectsBar from "@/features/project/components/projects-bar";

export default async function Home() {
  return (
    // TODO: Add Custom Header
    <div className="bg-amber-50 ">
      <ProjectsBar></ProjectsBar>
      <Suspense fallback={<Spinner />}>
        <ProjectList></ProjectList>
      </Suspense>
    </div>
  );
}
