export interface User {
<<<<<<< HEAD
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  condition: string;
  size: string;
  brand: string;
  sellerId: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Listing {
  id: string;
  product: Product;
  status: 'active' | 'sold' | 'pending';
  views: number;
  likes: number;
=======
  Id: number;
  username: string;
  email: string;
  Image?: string;
  points: number;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  size: string;
  condition: string;
  tags: string[];
  available: boolean;
  isApproved: boolean;
  createdAt: string;
  userId: number;
  user: {
    username: string;
    Image?: string;
  };
  images: ItemImage[];
}

export interface ItemImage {
  id: number;
  url: string;
  itemId: number;
}

export interface Swap {
  id: number;
  senderId: number;
  receiverId: number;
  offeredItemId: number;
  requestedItemId?: number;
  swapType: 'DIRECT' | 'POINTS';
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';
  createdAt: string;
  sender: User;
  receiver: User;
  offeredItem: Item;
  requestedItem?: Item;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
}

// Dummy export to ensure module is recognized by bundler
export const __ = {};

export interface CreateItemData {
  title: string;
  description: string;
  category: string;
  size: string;
  condition: string;
  tags: string;
>>>>>>> b9f3a4b2d29d82dacd218e2c0283cd0fd5c818ac
}