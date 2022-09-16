import { Product } from "../entities/Product";

export interface IProductsRepository {
  findByName: (name: string) => Promise<Product>;
  save: (product: Product) => Promise<Product>;
}
