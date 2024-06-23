import React from "react";
import NewButton from "./new-button";
import List from "./list";

const Sitebar = () => {
  return (
    <aside className="fixed z-1 left-0 bg-blue-950 h-full w-[60px] flex  items-center flex-col text-white gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sitebar;
