import { Request, Response } from "express";
import { GetUsersUseCase } from "./get-users-use-case";

export class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getUsersUseCase.execute();

      return response.status(201).send(users);
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "unexpected error" });
    }
  }
}
