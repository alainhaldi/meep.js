import AppHeader from "@/components/header";
import AppProjectCard from "@/features/project/project-card";

export default function Home() {
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="p-8 flex justify-center">
        <AppProjectCard></AppProjectCard>
      </div>
    </div>
  );
}
