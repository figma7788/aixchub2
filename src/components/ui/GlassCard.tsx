import React from "react";
import { cn } from "./utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-neutral-900/30 backdrop-blur-md rounded-[7px] border border-white/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
