import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IDeleteUserDTO } from "./delete-user-dto";

export class DeleteUserUseCase {
  constructor(private productRepository: IUsersRepository) {}

  async execute({ id }: IDeleteUserDTO) {
    return await this.productRepository.deleteUser(id);
  }
}
