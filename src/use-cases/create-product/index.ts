import { FileProductsRepository } from "../../repositories/implementations/FileProductsRepository";
import { CreateProductController } from "./create-product-controller";
import { CreateProductUseCase } from "./create-product-use-case";

const fileProductsRepository = new FileProductsRepository();

const createProductUseCase = new CreateProductUseCase(fileProductsRepository);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController };
