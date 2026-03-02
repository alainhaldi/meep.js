import AppHeader from "@/components/header";

export default function ProjectDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader isHomeScreen={false}></AppHeader>
      <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/10 flex flex-col">
        {children}
      </main>
    </>
  );
}
