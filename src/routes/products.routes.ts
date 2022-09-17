import { Router } from "express";
import { createProductController } from "../use-cases/products/create-product";
import { getProductsController } from "../use-cases/products/get-products";

const productsRouter = Router();

productsRouter.post("/", (request, response) =>
  createProductController.handle(request, response)
);

productsRouter.get("/", (request, response) =>
  getProductsController.handle(request, response)
);

export default productsRouter;
