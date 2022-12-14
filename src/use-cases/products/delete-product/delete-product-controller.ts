import { Request, Response } from "express";
import { DeleteProductUseCase } from "./delete-product-use-case";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteProductUseCase.execute({ id });

      return response.status(200).send("success");
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "unexpected error" });
    }
  }
}
