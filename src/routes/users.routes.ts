import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/auth";
import { authenticationUserController } from "../use-cases/users/authentication";
import { createUserController } from "../use-cases/users/create-user";
import { deleteUserController } from "../use-cases/users/delete-user";
import { getUsersController } from "../use-cases/users/get-users";

const usersRouter = Router();

usersRouter.post("/authenticate", (request, response) =>
  authenticationUserController.handle(request, response)
);

usersRouter.use(authenticateMiddleware.auth);

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
