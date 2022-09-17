import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthConfig from "../../../config/auth";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IAuthenticationUserDTO } from "./authentication-user-dto";

export class AuthenticationUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticationUserDTO) {
    const user = await this.userRepository.findByEmail(email);

    console.log(user);

    if (!user) {
      throw new Error("incorrect email or password");
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new Error("incorrect email or password");
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET ?? AuthConfig.secret,
      {
        expiresIn: AuthConfig.expiresIn,
      }
    );

    const { password: _, ...userLogin } = user;

    return {
      user: userLogin,
      token: token,
    };
  }
}
