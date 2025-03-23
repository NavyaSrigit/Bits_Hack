
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Box, ChartBar, Database, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <Logo size="lg" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button className="button-hover-effect" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
            Inventory Management for MSMEs
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Manage your inventory with ease and precision
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A cloud-based tool designed specifically for MSMEs to track inventory, generate reports, and get sales predictions with minimal effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-hover-effect" asChild>
              <Link to="/signup">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="button-hover-effect" asChild>
              <Link to="/login">Sign in to your Account</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Box />}
            title="Inventory Tracking"
            description="Keep track of your products, stocks, and suppliers in real-time with our intuitive interface."
          />
          <FeatureCard 
            icon={<Database />}
            title="Data Management"
            description="Organize your inventory data efficiently with categories, tags, and custom fields."
          />
          <FeatureCard 
            icon={<ChartBar />}
            title="Reports & Analytics"
            description="Generate insightful reports to understand trends and make informed decisions."
          />
          <FeatureCard 
            icon={<ShoppingCart />}
            title="Sales Predictions"
            description="Leverage AI-powered predictions to forecast sales and optimize inventory levels."
          />
        </div>

        <div className="mt-24 glass-panel p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Ready to streamline your inventory management?</h2>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Join thousands of MSMEs that have optimized their operations with our platform.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="button-hover-effect" asChild>
              <Link to="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-12 px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} InventoryMS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="glass-panel p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="rounded-full p-3 bg-primary/10 text-primary w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
