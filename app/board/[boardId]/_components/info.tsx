import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Hint } from "@/components/hits/hint";
import { useRenameModal } from "@/store/use-rename-modal";
// import { Actions } from "@/components/actions";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoPageProps {
  boardId: string;
}

const TabSeparator = () => {
  return <div className="bg-neutral-300 mx-2 w-[2px] h-6"></div>;
};

const Info = ({ boardId }: InfoPageProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-4 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" sideOffset={10} side="bottom">
        <Button asChild variant={"board"}>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={70} />
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          className="px-2 text-base font-normal"
          variant={"board"}
          onClick={() => onOpen(data._id, data.title)}
        >
          {data?.title}
        </Button>
      </Hint>
      <TabSeparator />
      <div className="pl-[27px]">
        <Actions id={data._id} title={data.title} side="bottom" sideoffset={10}>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button variant={"board"} size={"icon"}>
              <Menu />
            </Button>
          </Hint>
        </Actions>
      </div>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md w-[300px] px-4 h-12 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
