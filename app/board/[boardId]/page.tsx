"use client";
import React from "react";
import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/canvas-loading";

interface BoardPageProps {
  params: {
    boardId: string;
  };
}

const BoardPage: React.FC<BoardPageProps> = ({ params }) => {
  console.log(params.boardId);

  // return <Loadi ng />;
  return (
    <div className="h-[100vh]">
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
};

export default BoardPage;
