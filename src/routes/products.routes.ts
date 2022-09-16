import { Router } from "express";
import { createProductController } from "../use-cases/create-product";

const productsRouter = Router();

productsRouter.post("/", (request, response) =>
  createProductController.handle(request, response)
);

export default productsRouter;
