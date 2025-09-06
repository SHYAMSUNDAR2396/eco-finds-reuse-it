import { Product } from "@/components/ProductCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Vintage Leather Armchair - Mid Century Modern",
    price: 350,
    category: "home",
    condition: "excellent",
    location: "San Francisco, CA",
    seller: "Sarah M.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
    description: "Beautiful vintage leather armchair from the 1960s. Genuine leather in excellent condition with minimal wear. Perfect statement piece for any living room.",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    title: "MacBook Pro 2019 13-inch - Space Gray",
    price: 800,
    category: "electronics",
    condition: "good",
    location: "New York, NY",
    seller: "Tech Pro",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    description: "MacBook Pro 2019 with Intel i5, 8GB RAM, 256GB SSD. Minor scratches on the lid but fully functional. Includes original charger.",
    createdAt: "2024-01-14T15:30:00Z"
  },
  {
    id: "3",
    title: "Designer Winter Coat - Wool Blend",
    price: 85,
    category: "clothing",
    condition: "excellent",
    location: "Boston, MA",
    seller: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    description: "Elegant wool blend winter coat in charcoal gray. Size Medium. From a smoke-free home. Professional dry-cleaned and ready to wear.",
    createdAt: "2024-01-13T09:15:00Z"
  },
  {
    id: "4",
    title: "First Edition Harry Potter Set (Books 1-7)",
    price: 450,
    category: "books",
    condition: "excellent",
    location: "Portland, OR",
    seller: "Book Collector",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    description: "Complete first edition Harry Potter series. All books in excellent condition with dust jackets. A must-have for any collector.",
    createdAt: "2024-01-12T14:20:00Z"
  },
  {
    id: "5",
    title: "iPhone 13 Pro Max - 256GB Unlocked",
    price: 650,
    category: "electronics",
    condition: "good",
    location: "Los Angeles, CA",
    seller: "Mobile Hub",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    description: "iPhone 13 Pro Max in Graphite. 256GB storage, unlocked for all carriers. Screen protector applied since day one. Minor wear on corners.",
    createdAt: "2024-01-11T11:45:00Z"
  },
  {
    id: "6",
    title: "Handmade Ceramic Plant Pots Set",
    price: 40,
    category: "home",
    condition: "excellent",
    location: "Austin, TX",
    seller: "Pottery Studio",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
    description: "Set of 3 handmade ceramic plant pots in earth tones. Perfect for indoor plants. Each pot has drainage holes and is completely unique.",
    createdAt: "2024-01-10T16:00:00Z"
  },
  {
    id: "7",
    title: "Acoustic Guitar - Yamaha FG830",
    price: 180,
    category: "toys",
    condition: "good",
    location: "Nashville, TN",
    seller: "Music Store",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "Yamaha FG830 acoustic guitar in natural finish. Great for beginners or professionals. Includes soft case and picks. Minor dings but sounds amazing.",
    createdAt: "2024-01-09T13:30:00Z"
  },
  {
    id: "8",
    title: "Professional Camera Lens - Canon 50mm f/1.8",
    price: 90,
    category: "electronics",
    condition: "excellent",
    location: "Seattle, WA",
    seller: "Photo Pro",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    description: "Canon EF 50mm f/1.8 STM lens. Perfect portrait lens with beautiful bokeh. Includes lens caps and UV filter. No scratches on glass.",
    createdAt: "2024-01-08T08:15:00Z"
  }
];

export const mockUser = {
  id: "user1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  joinedAt: "2023-06-15T00:00:00Z",
  location: "San Francisco, CA",
  rating: 4.8,
  totalSales: 23,
  totalPurchases: 15
};

export const mockCategories = [
  "all",
  "electronics",
  "clothing",
  "home",
  "books",
  "automotive",
  "toys",
  "baby",
  "sports"
];