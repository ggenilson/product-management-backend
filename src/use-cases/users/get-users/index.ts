import { FileUsersRepository } from "../../../repositories/implementations/FileUsersRepository";
import { GetUsersController } from "./get-users-controller";
import { GetUsersUseCase } from "./get-users-use-case";

const fileUsersRepository = new FileUsersRepository();

const getUsersUseCase = new GetUsersUseCase(fileUsersRepository);

const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersController };
