"use client";
import { Skeleton } from "@/components/ui/skeleton";
// import { useOther, useSelf } from "@liveblocks/react/suspense";
// import { useThreads } from "@/";
import React from "react";
import { useOther, useOthers, useSelf } from "@liveblocks/react/suspense";
// import { useOthers } from "@liveblocks/react";

const Participants = () => {
  // console.log(useOther());
  // const users = useOthers();
  // const currentUser = useSelf();
  // console.log(users);

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      List of users
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
