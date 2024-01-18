import { User } from "../dtos/user/user";
import { model, Schema, Document } from "mongoose";

const userSchema: Schema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

const userModel = model<User & Document>("users", userSchema);

export default userModel;
