import { Button } from "@/components/ui/button";
import { Smartphone, Shirt, Home, Book, Car, Gamepad2, Baby, Dumbbell } from "lucide-react";

const categories = [
  { id: "all", name: "All Items", icon: null },
  { id: "electronics", name: "Electronics", icon: Smartphone },
  { id: "clothing", name: "Clothing", icon: Shirt },
  { id: "home", name: "Home & Garden", icon: Home },
  { id: "books", name: "Books & Media", icon: Book },
  { id: "automotive", name: "Automotive", icon: Car },
  { id: "toys", name: "Toys & Games", icon: Gamepad2 },
  { id: "baby", name: "Baby & Kids", icon: Baby },
  { id: "sports", name: "Sports & Fitness", icon: Dumbbell },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start h-auto py-3"
              onClick={() => onCategoryChange(category.id)}
            >
              {Icon && <Icon className="h-4 w-4 mr-3" />}
              <span className="text-sm">{category.name}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;