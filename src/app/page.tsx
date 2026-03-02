import { redirect } from "next/navigation";
import { projectsPath } from "@/path";

// Currently all the homescreen does, is forwarding to the /projects page automatically
export default function Home() {
  redirect(projectsPath());
}
