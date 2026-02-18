import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import ProjectList from "@/features/project/components/project-list";

export default async function Home() {
  return (
    // TODO: Add Custom Header
    <Suspense fallback={<Spinner />}>
      <ProjectList></ProjectList>
    </Suspense>
  );
}
