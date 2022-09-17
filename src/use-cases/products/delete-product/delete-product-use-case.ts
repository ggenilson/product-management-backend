import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IDeleteProductDTO } from "./delete-product-dto";

export class DeleteProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute({ id }: IDeleteProductDTO) {
    return await this.productRepository.deleteProduct(id);
  }
}
