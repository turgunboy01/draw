"use client";
import { Hint } from "@/components/hits/hint";
import { CreateOrganization } from "@clerk/clerk-react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import React from "react";

const NewButton = () => {
  return (
    <div >
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspest-square flex justify-center items-center">
            <Hint label="Create Organixation">
              <button className="text-white bg-white/25 h-[40px] w-[40px] rounded-md flex justify-center items-center opacity-60">
                <Plus />
              </button>
            </Hint>
          </div>
        </DialogTrigger>
        <DialogContent className=" bg-transparent border-none  mx-auto absolute left-[100%] top-[25%]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewButton;
