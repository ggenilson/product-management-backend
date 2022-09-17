import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class GetUsersUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute() {
    return await this.userRepository.getUsers();
  }
}
