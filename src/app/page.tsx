import AppHeader from "@/components/header";

export default function Home() {
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="flex h-screen items-center justify-center">
        <p className="text-2xl">
          This will soon become a project and task tracker app 🗂️
        </p>
      </div>
    </div>
  );
}
