import { FileProductsRepository } from "../../../repositories/implementations/FileProductsRepository";
import { DeleteProductController } from "./delete-product-controller";
import { DeleteProductUseCase } from "./delete-product-use-case";

const fileProductsRepository = new FileProductsRepository();

const deleteProductUseCase = new DeleteProductUseCase(fileProductsRepository);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductController };
