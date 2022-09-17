import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail: (email: string) => Promise<User>;
  save: (user: User) => Promise<User>;
  getProducts: () => Promise<User[]>;
  updateUserFile: () => void;
  getUserFile: () => Promise<User[]>;
}
