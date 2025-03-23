
import { useState } from "react";
import { InventoryItem as InventoryItemType } from "@/lib/inventory-data";
import { formatDistanceToNow } from "date-fns";
import { Button } from "./ui/button";
import { Box, Pencil, Trash2 } from "lucide-react";

interface InventoryItemProps {
  item: InventoryItemType;
}

export function InventoryItem({ item }: InventoryItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isLowStock = item.quantity <= item.reorderPoint;
  
  return (
    <div 
      className="glass-panel p-4 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.name} 
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Box className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">{item.name}</h3>
            <span className="text-sm text-muted-foreground px-2 py-1 rounded-full bg-secondary">
              {item.category}
            </span>
          </div>
          
          <div className="mt-1 grid grid-cols-3 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Qty: </span>
              <span className={isLowStock ? "text-red-500 font-medium" : ""}>
                {item.quantity}
              </span>
              {isLowStock && (
                <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Low
                </span>
              )}
            </div>
            <div>
              <span className="text-muted-foreground">Price: </span>
              <span>${item.price.toFixed(2)}</span>
            </div>
            <div className="text-right">
              <span className="text-muted-foreground">Updated: </span>
              <span>
                {formatDistanceToNow(new Date(item.lastUpdated), { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`mt-4 flex justify-end gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <Button size="sm" variant="outline" className="h-8">
          <Pencil className="h-3.5 w-3.5 mr-1" />
          Edit
        </Button>
        <Button size="sm" variant="outline" className="h-8 text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
          <Trash2 className="h-3.5 w-3.5 mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
}
