
export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  costPrice: number;
  supplier: string;
  reorderPoint: number;
  lastUpdated: string;
  image?: string;
}

export interface SalesData {
  month: string;
  sales: number;
  prediction: number;
}

export const inventoryItems: InventoryItem[] = [
  {
    id: "INV001",
    name: "Premium T-shirt",
    category: "Apparel",
    quantity: 245,
    price: 29.99,
    costPrice: 12.50,
    supplier: "TextilePro Inc.",
    reorderPoint: 50,
    lastUpdated: "2023-11-15T08:30:00Z",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "INV002",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    quantity: 32,
    price: 199.99,
    costPrice: 120.00,
    supplier: "OfficeMasters LLC",
    reorderPoint: 10,
    lastUpdated: "2023-11-12T14:20:00Z",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "INV003",
    name: "Ultra-Slim Laptop",
    category: "Electronics",
    quantity: 18,
    price: 899.99,
    costPrice: 650.00,
    supplier: "TechWorld Distribution",
    reorderPoint: 5,
    lastUpdated: "2023-11-16T10:15:00Z",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "INV004",
    name: "Stainless Steel Water Bottle",
    category: "Accessories",
    quantity: 156,
    price: 24.99,
    costPrice: 8.75,
    supplier: "EcoGoods Supply",
    reorderPoint: 30,
    lastUpdated: "2023-11-14T16:45:00Z",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "INV005",
    name: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    quantity: 78,
    price: 129.99,
    costPrice: 65.50,
    supplier: "AudioTech Inc.",
    reorderPoint: 20,
    lastUpdated: "2023-11-17T09:30:00Z",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "INV006",
    name: "Organic Coffee Beans",
    category: "Food & Beverage",
    quantity: 112,
    price: 14.99,
    costPrice: 7.25,
    supplier: "Global Bean Traders",
    reorderPoint: 25,
    lastUpdated: "2023-11-13T11:20:00Z",
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export const salesData: SalesData[] = [
  { month: "Jan", sales: 4000, prediction: 4200 },
  { month: "Feb", sales: 4500, prediction: 4700 },
  { month: "Mar", sales: 5100, prediction: 5300 },
  { month: "Apr", sales: 4800, prediction: 5000 },
  { month: "May", sales: 5500, prediction: 5700 },
  { month: "Jun", sales: 6000, prediction: 6500 },
  { month: "Jul", sales: 6200, prediction: 6800 },
  { month: "Aug", sales: 5800, prediction: 6300 },
  { month: "Sep", sales: 6500, prediction: 7000 },
  { month: "Oct", sales: 7000, prediction: 7500 },
  { month: "Nov", sales: 0, prediction: 8000 },
  { month: "Dec", sales: 0, prediction: 8500 }
];

export const getDashboardStats = () => {
  const totalItems = inventoryItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const lowStockItems = inventoryItems.filter(item => item.quantity <= item.reorderPoint).length;
  const totalCategories = new Set(inventoryItems.map(item => item.category)).size;
  
  return {
    totalItems,
    totalValue,
    lowStockItems,
    totalCategories,
  };
};
