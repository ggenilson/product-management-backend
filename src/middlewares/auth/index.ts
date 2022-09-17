import { FileUsersRepository } from "../../repositories/implementations/FileUsersRepository";
import { AuthMiddleware } from "./auth-middleware";

const fileUsersRepository = new FileUsersRepository();
const authenticateMiddleware = new AuthMiddleware(fileUsersRepository);

export { authenticateMiddleware };
