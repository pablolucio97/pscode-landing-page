'use client';

import clsx from "clsx";

export interface BadgeProps {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined" | "alert" | "destructive";
  className?: string;
}

export default function Badge({
  text,
  size = "medium",
  variant = "filled",
  className,
} : BadgeProps) {
  return (
    <div
      className={clsx(
        "flex w-fit items-center rounded-full font-semibold text-xs sm:text-sm",
        size === "small" && "px-2 py-1 text-xs",
        size === "medium" && "px-3 py-1.5 text-sm",
        size === "large" && "px-4 py-2 text-base",
        variant === "outlined" &&
          "bg-transparent border border-foreground text-foreground",
        variant === "filled" && "bg-primary-500 text-white",
        variant === "alert" && "bg-amber-500 text-white",
        variant === "destructive" && "bg-destructive-500 text-white",
        className
      )}
    >
      {text}
    </div>
  );
}


