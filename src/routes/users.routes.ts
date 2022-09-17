import { Router } from "express";
import { createUserController } from "../use-cases/users/create-user";
import { deleteUserController } from "../use-cases/users/delete-user";
import { getUsersController } from "../use-cases/users/get-users";

const usersRouter = Router();

usersRouter.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRouter.get("/", (request, response) =>
  getUsersController.handle(request, response)
);

usersRouter.delete("/:id", (request, response) =>
  deleteUserController.handle(request, response)
);

export default usersRouter;
