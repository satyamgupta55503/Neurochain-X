// src/components/ui/card.tsx

import React from "react";
import { cn } from "@/lib/utils"; // optional if you use `cn`

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("rounded-2xl bg-gradient-to-br from-[#111] to-[#1a1a1a] p-4 shadow-xl", className || "")}>
      {children}
    </div>
  );
};
