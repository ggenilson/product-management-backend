import { Request, Response } from "express";
import { GetProductsUseCase } from "./get-products-use-case";

export class GetProductsController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.getProductsUseCase.execute();

      return response.status(201).send(products);
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "unexpected error" });
    }
  }
}
