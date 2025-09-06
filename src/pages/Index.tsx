import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { mockProducts } from "@/data/mockData";
import { Product } from "@/components/ProductCard";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleProductClick = (product: Product) => {
    console.log("Product clicked:", product);
    // Navigate to product detail page
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Category Filter */}
          <div className="lg:col-span-1">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          
          {/* Main Content - Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid 
              products={mockProducts}
              selectedCategory={selectedCategory}
              onProductClick={handleProductClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;