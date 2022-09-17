import { FileUsersRepository } from "../../../repositories/implementations/FileUsersRepository";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";

const fileUsersRepository = new FileUsersRepository();

const createUserUseCase = new CreateUserUseCase(fileUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
