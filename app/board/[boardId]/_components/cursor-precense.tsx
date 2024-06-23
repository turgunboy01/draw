"use client";
import { useOthersConnectionIds } from "@liveblocks/react";
import { memo } from "react";
import { Cursor } from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  console.log(ids, "ids");
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

export const CursorePrecense = memo(() => {
  return (
    <div>
      <Cursors />
     </div>
  );
});

CursorePrecense.displayName = "CursorePrecense";
