import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Hint } from "@/components/hits/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id == id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      {/* <Image src={`${imageUrl}`} fill /> */}
      <Hint label={name} align="start" side="right" sideOffset={10}>
        <img
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn(
            `rounded-md cursor-pointer object-fill opacity-75 w-[40px] h-[40px]  hover:opacity-100 transition`,
            isActive ? "opacity-100 " : ""
          )}
        />
      </Hint>
      {/* <p> {name}</p> */}
    </div>
  );
};
