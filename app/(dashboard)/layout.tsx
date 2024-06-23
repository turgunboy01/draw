import Navabar from "./_components/navbar/Navabar";
import OrignSitebar from "./_components/orgSitebar";
import Sitebar from "./_components/sitebar";

interface LayoutPageProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutPageProps) => {
  return (
    <main className="h-full">
      <Sitebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrignSitebar />
          <div className="h-full flex-1">
            <Navabar />
            {children}
          </div>
        </div>
      </div>
      ;
    </main>
  );
};

export default DashboardLayout;
