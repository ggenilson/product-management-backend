import { FileUsersRepository } from "../../../repositories/implementations/FileUsersRepository";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-use-case";

const fileUsersRepository = new FileUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(fileUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
