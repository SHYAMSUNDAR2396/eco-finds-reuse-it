import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Package, 
  ShoppingBag, 
  Heart, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye,
  Star,
  MapPin,
  Calendar
} from "lucide-react";
import { mockUser, mockProducts } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user's listings (subset of mockProducts)
  const userListings = mockProducts.slice(0, 3);
  const userPurchases = mockProducts.slice(3, 6);
  const userFavorites = mockProducts.slice(6, 8);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage your EcoFinds account and listings</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - User Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{mockUser.name}</h3>
                    <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                    <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {mockUser.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(mockUser.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{mockUser.rating}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{mockUser.totalSales}</div>
                      <div className="text-xs text-muted-foreground">Items Sold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{mockUser.totalPurchases}</div>
                      <div className="text-xs text-muted-foreground">Items Bought</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="listings" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">My Listings</span>
                </TabsTrigger>
                <TabsTrigger value="purchases" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="hidden sm:inline">Purchases</span>
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Favorites</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="shadow-soft border-border">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <p className="text-muted-foreground">{mockUser.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <p className="text-muted-foreground">{mockUser.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Location</label>
                        <p className="text-muted-foreground">{mockUser.location}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Member Since</label>
                        <p className="text-muted-foreground">June 15, 2023</p>
                      </div>
                    </div>
                    <Button variant="default">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="listings" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">My Listings ({userListings.length})</h3>
                  <Button variant="hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Listing
                  </Button>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userListings.map((product) => (
                    <div key={product.id} className="relative">
                      <ProductCard 
                        product={product} 
                        onProductClick={() => {}} 
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Edit3 className="h-3 w-3" />
                        </Button>
                        <Button size="icon" variant="destructive" className="h-8 w-8">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="purchases" className="space-y-6">
                <h3 className="text-lg font-semibold">Purchase History ({userPurchases.length})</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userPurchases.map((product) => (
                    <div key={product.id} className="relative">
                      <ProductCard 
                        product={product} 
                        onProductClick={() => {}} 
                      />
                      <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
                        Purchased
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <h3 className="text-lg font-semibold">Favorite Items ({userFavorites.length})</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userFavorites.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product} 
                      onProductClick={() => {}} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;