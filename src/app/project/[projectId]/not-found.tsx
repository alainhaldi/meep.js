import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { projectsPath } from "@/path";

export default function NotFound() {
  return (
    <Placeholder
      label="We could not find your project"
      button={
        <Button asChild variant="outline">
          <Link href={projectsPath()}>Go to Projects</Link>
        </Button>
      }
    />
  );
}
