import { CreateUserRequest, User } from "../dtos/user/user";
import UserRepository from "../repositories/user.repository";

class UserService {
  public userRepository = new UserRepository();

  createUser = async (data: CreateUserRequest) => {
    return this.userRepository.create(data);
  };

  fetchUsers = async (): Promise<User[]> => {
    return this.userRepository.getAll();
  };
}

export default UserService;
