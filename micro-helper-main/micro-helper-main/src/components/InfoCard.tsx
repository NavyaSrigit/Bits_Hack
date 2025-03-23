
import { AnimatedNumber } from "./AnimatedNumber";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  formatter?: (value: number) => string;
  className?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export function InfoCard({
  title,
  value,
  icon,
  formatter = (val) => val.toLocaleString(),
  className,
  trend,
  trendValue,
}: InfoCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500";
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
  
  return (
    <div 
      className={cn(
        "glass-panel p-6 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1">
            <AnimatedNumber value={value} formatter={formatter} />
          </h3>
          {trend && (
            <p className={cn("text-sm mt-1 flex items-center gap-1", trendColor)}>
              <span>{trendIcon}</span>
              <span>{trendValue}</span>
            </p>
          )}
        </div>
        <div className="rounded-full p-2 bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}
