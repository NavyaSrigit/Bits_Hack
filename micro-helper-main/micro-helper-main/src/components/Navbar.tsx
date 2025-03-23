
import { useState } from "react";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import { Bell, LogOut, Menu, Search, User } from "lucide-react";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <button className="lg:hidden" aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`relative transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-64' : 'w-0 md:w-64'}`}>
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground ${isSearchExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}
            />
            <Input
              placeholder="Search..."
              className={`pl-10 h-9 ${isSearchExpanded ? 'opacity-100 w-full' : 'opacity-0 w-0 md:opacity-100 md:w-full'}`}
            />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 md:hidden"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative h-9 w-9" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
