import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class GetUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute() {
    return await this.userRepository.getProducts();
  }
}
