import { IsNotEmpty } from "class-validator";

export interface User {
  _id: string;
  name: string;
  description: string;
  img: string;
}

export type CreateUserRequest = Omit<User, "_id">;

export class CreateUserRequestVal implements CreateUserRequest {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  name: string;

  img: string;
}
