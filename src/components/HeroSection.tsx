import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, ShoppingBag, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-background via-secondary/20 to-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Discover</span>{" "}
                <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Sustainable
                </span>{" "}
                <span className="text-foreground">Treasures</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Join our community of eco-conscious shoppers. Find unique second-hand items 
                while reducing waste and supporting sustainable living.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Sell Your Items
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <ShoppingBag className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">100K+</div>
                <div className="text-sm text-muted-foreground">Items Sold</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Recycle className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">50%</div>
                <div className="text-sm text-muted-foreground">Waste Reduced</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Sustainable marketplace shopping"
                className="rounded-2xl shadow-large w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-success rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-earth rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;