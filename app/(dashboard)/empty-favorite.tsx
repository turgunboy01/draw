import React from "react";
import img from "@/public/img.png";
import Image from "next/image";
const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={img} alt="" height={200} width={200} />
      <h2 className="text-2xl font-semibold  mt-6">No favorites boards</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Try favoriting a board
      </p>
    </div>
  );
};

export default EmptyFavorite;
