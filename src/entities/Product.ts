import { randomUUID } from "crypto";

export class Product {
  public readonly id: string;

  public name: string;
  public value: number;
  public group: string;

  constructor(props: Omit<Product, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
