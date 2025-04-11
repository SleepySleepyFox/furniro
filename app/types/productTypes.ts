export type productFields = {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    discount_price: number;
    sku: string;
    status: 'active' | 'inactive' | string;
    stock: number;
    weight: number;
    wood_type: string;
    finish: string;
    featured: boolean;
    image_path: string;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    tags: string[] | null;
    created_at: string;
    updated_at: string; 
  }