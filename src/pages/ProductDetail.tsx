import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  ShoppingCart, 
  MessageCircle, 
  MapPin,
  Clock,
  Shield,
  Star,
  Camera
} from "lucide-react";
import { mockProducts, mockUser } from "@/data/mockData";

interface ProductDetailProps {
  productId?: string;
}

const ProductDetail = ({ productId = "1" }: ProductDetailProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Get product (mock data)
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  
  // Mock additional product images
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400&h=300&fit=crop"
  ];

  const conditionColors = {
    excellent: "bg-success text-success-foreground",
    good: "bg-primary text-primary-foreground",
    fair: "bg-accent text-accent-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Listings
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-xl shadow-medium"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? 'fill-destructive text-destructive' : ''}`} />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <Badge className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
                <Camera className="h-3 w-3 mr-1" />
                {productImages.length} photos
              </Badge>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index 
                      ? 'border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <Badge className={conditionColors[product.condition]}>
                  {product.condition}
                </Badge>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.title}
              </h1>
              <div className="text-4xl font-bold text-primary mb-4">
                ${product.price}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {product.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Listed 2 days ago
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="hero" size="lg" className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Seller
              </Button>
            </div>

            {/* Seller Information */}
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Seller Information</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{product.seller}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">4.8 (23 reviews)</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Member since 2023</div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            {/* Trust & Safety */}
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Trust & Safety</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-foreground">Verified seller with excellent reputation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-foreground">Secure payment through EcoFinds</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-foreground">30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Similar Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.slice(0, 4).map((similarProduct) => (
              <Card key={similarProduct.id} className="group cursor-pointer hover:shadow-medium transition-all duration-300">
                <div className="relative">
                  <img
                    src={similarProduct.image}
                    alt={similarProduct.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-2 left-2 ${conditionColors[similarProduct.condition]}`}>
                    {similarProduct.condition}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2 mb-2">
                    {similarProduct.title}
                  </h3>
                  <div className="text-lg font-bold text-primary">
                    ${similarProduct.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;