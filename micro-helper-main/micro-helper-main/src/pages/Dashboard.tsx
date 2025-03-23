
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { InfoCard } from "@/components/InfoCard";
import { PredictionChart } from "@/components/PredictionChart";
import { InventoryList } from "@/components/InventoryList";
import { getDashboardStats } from "@/lib/inventory-data";
import { Box, DollarSign, AlertCircle, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalItems: 0,
    totalValue: 0,
    lowStockItems: 0,
    totalCategories: 0
  });
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchDashboardData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = getDashboardStats();
      setStats(data);
      setIsLoading(false);
    };
    
    fetchDashboardData();
  }, []);
  
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      <main className="container py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <InfoCard
            title="Total Items"
            value={stats.totalItems}
            icon={<Box className="h-6 w-6" />}
            trend="up"
            trendValue="12% from last month"
          />
          
          <InfoCard
            title="Inventory Value"
            value={stats.totalValue}
            formatter={formatCurrency}
            icon={<DollarSign className="h-6 w-6" />}
            trend="up"
            trendValue="8% from last month"
          />
          
          <InfoCard
            title="Low Stock Items"
            value={stats.lowStockItems}
            icon={<AlertCircle className="h-6 w-6" />}
            trend="down"
            trendValue="3 fewer than last week"
          />
          
          <InfoCard
            title="Categories"
            value={stats.totalCategories}
            icon={<BarChart3 className="h-6 w-6" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PredictionChart />
          
          <div className="glass-panel p-6 h-[400px] overflow-auto">
            <h2 className="text-2xl font-bold mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">
                      {["Inventory updated", "New item added", "Low stock alert", "Item restocked", "Price updated", "Order fulfilled"][index % 6]}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {index % 2 === 0
                        ? "Ultra-Slim Laptop stock updated to 25 units"
                        : "Premium T-shirt price updated to $32.99"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {`${Math.floor(index * 1.5)} hours ago`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <InventoryList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
