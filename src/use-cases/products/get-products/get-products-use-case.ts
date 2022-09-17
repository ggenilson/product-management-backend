import { IProductsRepository } from "../../../repositories/IProductsRepository";

export class GetProductsUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute() {
    return await this.productRepository.getProducts();
  }
}
