export class Product {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  available: string;
}

export class CartPosition {
  product: Product;
  quantity: number;
}
