import bcrypt from "bcrypt";
import fs from "fs";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class FileUsersRepository implements IUsersRepository {
  private users: User[] = [];

  updateUserFile(): void {
    fs.writeFile("users.json", JSON.stringify(this.users), (err) => {
      if (err) {
        console.log("something went wrong");
      } else {
        console.log("user updated");
      }
    });
  }

  async getUserFile(): Promise<User[]> {
    try {
      const data = await fs.promises.readFile("users.json", "utf8");

      const dataParsed = JSON.parse(data);

      return dataParsed;
    } catch (err) {
      console.log(err.message);
    }
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User): Promise<User> {
    const hashPassword = await bcrypt.hash(user.password, 10);

    this.users.push({ ...user, password: hashPassword });

    this.updateUserFile();

    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.getUserFile();

    return users;
  }

  async deleteUser(id: string): Promise<void> {
    const users = await this.getUserFile();
    const userIndex = users.findIndex((user) => user.id === id);

    users.splice(userIndex, 1);

    this.users = users;

    this.updateUserFile();
  }
}
