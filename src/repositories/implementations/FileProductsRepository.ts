import fs from "fs";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class FileProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  constructor() {
    fs.readFile("products.json", (err, res) => {
      if (err) {
        console.log("can not get products");
      } else {
        this.products = JSON.parse(res as any);
      }
    });
  }

  updateProductFile(): void {
    fs.writeFile("products.json", JSON.stringify(this.products), (err) => {
      if (err) {
        console.log("something went wrong");
      } else {
        console.log("product updated");
      }
    });
  }

  async findByName(name: string): Promise<Product> {
    const product = this.products.find((product) => product.name === name);

    return product;
  }

  async save(product: Product): Promise<Product> {
    this.products.push(product);

    this.updateProductFile();

    return product;
  }
}
