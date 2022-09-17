import fs from "fs";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class FileProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  updateProductFile(): void {
    fs.writeFile("products.json", JSON.stringify(this.products), (err) => {
      if (err) {
        console.log("something went wrong");
      } else {
        console.log("product updated");
      }
    });
  }

  async getProductFile(): Promise<Product[]> {
    try {
      const data = await fs.promises.readFile("products.json", "utf8");

      const dataParsed = JSON.parse(data);

      return dataParsed;
    } catch (err) {
      console.log(err.message);
    }
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

  async getProducts(): Promise<Product[]> {
    const products = await this.getProductFile();

    return products;
  }

  async deleteProduct(id: string): Promise<void> {
    const products = await this.getProductFile();
    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);

    this.products = products;

    this.updateProductFile();
  }
}
