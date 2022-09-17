import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthConfig from "../config/auth";
import { IUsersRepository } from "../repositories/IUsersRepository";

type JwtPayload = {
  id: number;
};

export class AuthMiddleware {
  constructor(private userRepository: IUsersRepository) {}

  async auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("unauthorized");
    }

    const [, token] = authorization.split(" ");

    const { id } = jwt.verify(
      token,
      process.env.JWT_PASS ?? AuthConfig.secret
    ) as JwtPayload;

    const user = await this.userRepository.findById(String(id));

    if (!user) {
      throw new Error("unauthorized");
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next();
  }
}

// export const authMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     throw new Error("unauthorized");
//   }

//   const [, token] = authorization.split(" ");

//   const { id } = jwt.verify(
//     token,
//     process.env.JWT_PASS ?? AuthConfig.secret
//   ) as JwtPayload;

//   const user = await FileUsersRepository({ id });

//   if (!user) {
//     throw new Error("unauthorized");
//   }

//   const { password: _, ...loggedUser } = user;

//   req.user = loggedUser;

//   next();
// };
