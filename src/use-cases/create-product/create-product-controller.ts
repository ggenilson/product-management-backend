import { Request, Response } from "express";
import { CreateProductUseCase } from "./create-product-use-case";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, value, group } = request.body;

    try {
      const product = await this.createProductUseCase.execute({
        name,
        value,
        group,
      });

      return response.status(201).send(product);
    } catch (err) {
      return response.status(400).json({ message: err || "unexpected error" });
    }
  }
}
