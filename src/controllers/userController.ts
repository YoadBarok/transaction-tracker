import { userService, UserService } from "../services/userService";
import { Request, Response } from "express";

export class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  saveNew = async (req: Request, res: Response) => {
    try {
      let newUser = await this.userService.saveNewUser(req.body);
      return res.status(200).json(newUser);
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        error = "Username or Email already taken!";
      }
        return res.status(500).json({ error: error });
    }
  };

  verify = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.serveUserByVerificationToken(
        req.params.verificationToken
      );

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  };
}

export const userController = new UserController(userService);
