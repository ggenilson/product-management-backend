import { Product } from "../entities/Product";

export interface IProductsRepository {
  findByName: (name: string) => Promise<Product>;
  save: (product: Product) => Promise<Product>;
  getProducts: () => Promise<Product[]>;
  deleteProduct: (id: string) => Promise<void>;
  updateProductFile: () => void;
  getProductFile: () => Promise<Product[]>;
}
