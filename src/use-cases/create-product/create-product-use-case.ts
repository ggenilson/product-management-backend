import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateProductDTO } from "./create-product-dto";

export class CreateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(data: ICreateProductDTO) {
    const productAlreadyExists = await this.productRepository.findByName(
      data.name
    );

    if (productAlreadyExists) {
      throw new Error("product already exists");
    }

    const product = new Product(data);

    const savedProduct = await this.productRepository.save(product);

    return savedProduct;
  }
}
