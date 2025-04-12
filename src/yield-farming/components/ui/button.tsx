import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500",
        className || ""
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
