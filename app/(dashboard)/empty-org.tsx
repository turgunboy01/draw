"use-client";
import Image from "next/image";
import React from "react";
import img from "@/public/paint.png";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const EmptyOrg = () => {
  return (
    <div className="h-full  flex flex-col items-center justify-centerc">
      <Image src={img} alt="NAME" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-6">Welcometo Board</h3>
      <p className="text-muted-foreground text-sm  mt-2">
        Create an organizationto get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organizitaion</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none mx-w-[480px ]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
