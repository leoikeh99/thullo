import IUserModel from "../interfaces/IUserModel";
import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  password: {
    type: String,
  },
});

const schema = mongoose.model<IUserModel>("Users", UserSchema);
export default schema;
