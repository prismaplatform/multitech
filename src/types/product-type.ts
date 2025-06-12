// types/product-type.ts

export interface Product {
 id: number | string; 
name: string;
  brand: string;
  category: string;
  industries: string;
  applications: string;
  surfaces: string;
  image?: string;
  description?: string;
  price?: number;
}