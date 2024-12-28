import NavBar from "@/components/nav-bar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
    </main>
  );
}
