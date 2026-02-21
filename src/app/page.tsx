import { redirect } from "next/navigation";

// Currently all the homescreen does, is forwarding to the /projects page automatically
export default function Home() {
  redirect("/projects");
}
