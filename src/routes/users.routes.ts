import { Router } from "express";
import { createUserController } from "../use-cases/users/create-user";
import { getUsersController } from "../use-cases/users/get-users";

const usersRouter = Router();

usersRouter.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRouter.get("/", (request, response) =>
  getUsersController.handle(request, response)
);

export default usersRouter;
