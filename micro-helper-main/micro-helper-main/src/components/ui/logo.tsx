
import { Box } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Box className={cn("text-primary", sizes[size])} />
        <div className="absolute inset-0 bg-primary opacity-20 blur-sm rounded-sm" />
      </div>
      {showText && (
        <span className={cn("font-semibold tracking-tight", textSizes[size])}>
          InventoryMS
        </span>
      )}
    </div>
  );
}
