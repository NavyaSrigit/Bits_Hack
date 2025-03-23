
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    // Check if location has changed
    setTransitionStage("fadeOut");
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location, children]);

  return (
    <div
      className={`w-full min-h-screen transition-opacity duration-300 ${
        transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};
