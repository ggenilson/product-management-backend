import { Router } from "express";
import { authenticateMiddleware } from "../middlewares/auth";
import { createProductController } from "../use-cases/products/create-product";
import { deleteProductController } from "../use-cases/products/delete-product";
import { getProductsController } from "../use-cases/products/get-products";

const productsRouter = Router();

productsRouter.use(authenticateMiddleware.auth);

productsRouter.post("/", (request, response) =>
  createProductController.handle(request, response)
);

productsRouter.get("/", (request, response) =>
  getProductsController.handle(request, response)
);

productsRouter.delete("/:id", (request, response) =>
  deleteProductController.handle(request, response)
);

export default productsRouter;
