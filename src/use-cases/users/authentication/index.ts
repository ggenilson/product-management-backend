import { FileUsersRepository } from "../../../repositories/implementations/FileUsersRepository";
import { AuthenticationUserController } from "./authentication-user-controller";
import { AuthenticationUserUseCase } from "./authentication-user-use-case";

const fileUsersRepository = new FileUsersRepository();

const authenticationUserUseCase = new AuthenticationUserUseCase(
  fileUsersRepository
);

const authenticationUserController = new AuthenticationUserController(
  authenticationUserUseCase
);

export { authenticationUserController };
