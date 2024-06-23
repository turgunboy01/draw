import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import Participants, { ParticipantsSkeleton } from "./participants";
import Toolbar, { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <div className="h-[100vh] w-full relative  flex justify-center items-center bg-neutral-100 touch-none">
      <Loader className="h-6 w-6  animate-spin  text-muted-foreground" />
      <InfoSkeleton />
      <ToolbarSkeleton />
      <ParticipantsSkeleton />
    </div>
  );
};
