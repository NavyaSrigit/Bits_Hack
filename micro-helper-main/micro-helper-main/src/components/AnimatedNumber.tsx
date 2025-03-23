
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatter?: (value: number) => string;
  className?: string;
}

export function AnimatedNumber({
  value,
  duration = 1000,
  formatter = (val) => val.toLocaleString(),
  className = "",
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    const startValue = displayValue;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutExpo for a nice deceleration effect
      const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
      const currentValue = startValue + (value - startValue) * easeOutExpo;
      
      setDisplayValue(Math.floor(currentValue));
      
      if (percentage < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    window.requestAnimationFrame(animate);
    
    return () => {
      startTime = null;
    };
  }, [value, duration]);
  
  return <span className={className}>{formatter(displayValue)}</span>;
}
