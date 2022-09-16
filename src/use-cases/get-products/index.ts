import { FileProductsRepository } from "../../repositories/implementations/FileProductsRepository";
import { GetProductsController } from "./get-products-controller";
import { GetProductsUseCase } from "./get-products-use-case";

const fileProductsRepository = new FileProductsRepository();

const getProductsUseCase = new GetProductsUseCase(fileProductsRepository);

const getProductsController = new GetProductsController(getProductsUseCase);

export { getProductsController };
