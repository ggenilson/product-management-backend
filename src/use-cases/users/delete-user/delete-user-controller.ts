import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user-use-case";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteUserUseCase.execute({ id });

      return response.status(200).send("success");
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "unexpected error" });
    }
  }
}
