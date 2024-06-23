"use client";

import { Hint } from "@/components/hits/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onclick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  label,
  icon: Icon,
  onclick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={onclick}
        size={"icon"}
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon /> 
      </Button>
    </Hint>
  );
};
