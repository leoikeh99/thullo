import mongoose from "mongoose";

interface UserModel extends mongoose.Document {
  email: string;
  googleId?: string;
  password?: string;
  avatar?: string;
}

export = UserModel;
