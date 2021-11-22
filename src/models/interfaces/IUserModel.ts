import mongoose from "mongoose";

interface UserModel extends mongoose.Document {
  email: string;
  username: string;
  googleId?: string;
  password?: string;
  avatar?: string;
}

export = UserModel;
