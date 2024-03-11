import products from '@/data/products.json';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string; //? means optional
  category: string;
  thumbnail: string;
  images: string[];
}
      //Return only an array of products
export function getProducts(): Product[] {
    return products.items;
    }