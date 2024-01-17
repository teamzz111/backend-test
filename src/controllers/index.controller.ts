import UserService from "../services/user.service";
import { CreateUserRequestVal } from "../dtos/user/user";
import { validateOrReject } from "class-validator";
import { Request, Response } from "express";

class IndexController {
  public userService = new UserService();

  public createUser = async (req: Request, res: Response) => {
    const { description, name } = req.body;

    let user = new CreateUserRequestVal();
    user.description = description;
    user.name = name;

    try {
      await validateOrReject(user);
      const result = await this.userService.createUser(user);
      res.status(200).json({ id: result });
    } catch (e) {
      console.log(e);
      res.status(400).send();
    }
  };

  public index = (req: Request, res: Response) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send();
    }
  };
}

export default IndexController;
