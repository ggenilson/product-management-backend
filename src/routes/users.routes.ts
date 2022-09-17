import { Router } from "express";
import { createUserController } from "../use-cases/users/create-user";

const usersRouter = Router();

usersRouter.post("/", (request, response) =>
  createUserController.handle(request, response)
);

export default usersRouter;
