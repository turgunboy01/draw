import Image from "next/image";
import React from "react";
import img from "@/public/result.png";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={img} alt="" height={400} width={400} />
      <h2 className="text-2xl font-semibold  mt-6">No Results found</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Try searching for something
      </p>
    </div>
  );
};

export default EmptySearch;
