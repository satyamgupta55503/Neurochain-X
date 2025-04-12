// src/components/ui/progress.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

export const Progress = ({ value, max = 100, className }: ProgressProps) => {
  return (
    <div className={cn("relative w-full h-2 bg-gray-800 rounded-full overflow-hidden", className || "")}>
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};
