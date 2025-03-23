
import { useState } from "react";
import { inventoryItems } from "@/lib/inventory-data";
import { InventoryItem } from "./InventoryItem";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Search } from "lucide-react";

export function InventoryList() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = inventoryItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Inventory Items</h2>
        <Button className="button-hover-effect">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or category..."
          className="pl-10 input-focus-effect"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <InventoryItem key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-muted-foreground">No items found matching your search.</p>
            <Button 
              variant="link" 
              className="mt-2"
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
