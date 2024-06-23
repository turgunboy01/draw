"use client";
import BoardList from "./board-list";
import EmptyOrg from "./empty-org";
import { useOrganization } from "@clerk/nextjs";

interface DashboarProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}


const DashboardPage = ({ searchParams }: DashboarProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6 ">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <p>
          <BoardList query={searchParams} orgId={organization.id} />
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
