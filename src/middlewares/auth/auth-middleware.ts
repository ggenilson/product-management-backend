import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthConfig from "../../config/auth";
import { FileUsersRepository } from "../../repositories/implementations/FileUsersRepository";

type JwtPayload = {
  id: number;
};

export class AuthMiddleware {
  async auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "unauthorized" });
    }

    try {
      const token = authorization.replace("Bearer", "").trim();

      const { id } = jwt.verify(
        token,
        process.env.JWT_PASS ?? AuthConfig.secret
      ) as JwtPayload;

      const repository = new FileUsersRepository();
      const user = await repository.findById(String(id));

      if (!user) {
        throw new Error("unauthorized");
      }

      const { password: _, ...loggedUser } = user;

      req.user = loggedUser;

      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: err.message });
    }
  }
}
