import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onclick: () => void;
  disabled: boolean;
}

const Footer = ({
  title,
  isFavorite,
  authorLabel,
  createdAtLabel,
  onclick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    onclick();
  };

  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          {
            "cursor-not-allowed opacity-75": disabled,
          }
        )}
      >
        <Star
          className={cn(
            "w-4 h-4",
            isFavorite ? "text-blue-600 fill-blue-600" : ""
          )}
        />
      </button>
    </div>
  );
};

export default Footer;
