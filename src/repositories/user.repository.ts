import { CreateUserRequest, User } from "../dtos/user/user";
import userModel from "../models/users.model";

class UserRepository {
  userModel: typeof userModel;

  constructor() {
    this.userModel = userModel;
  }

  async create(data: CreateUserRequest): Promise<string | never> {
    try {
      const result = await this.userModel.create(data);
      return result._id;
    } catch (e) {
      console.error(e);
      throw new Error("Ha ocurrido un error creando el usuario");
    }
  }

  getAll = async (): Promise<User[]> => {
    try {
      const result = await this.userModel.find();
      return result;
    } catch (e) {
      console.error(e);
      throw new Error("Ha ocurrido un error creando el usuario");
    }
  };
}

export default UserRepository;
