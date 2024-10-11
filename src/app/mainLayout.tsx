import SideNav from "@/app/layout/SideNav";
import Header  from "@/app/layout/Header";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNav/>
      <div className="flex flex-col">
        {/* header */}
        <Header />
        {/* main content */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout
