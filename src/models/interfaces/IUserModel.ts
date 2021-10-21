import mongoose from "mongoose";

interface UserModel extends mongoose.Document {
  email: string;
  googleId?: string;
  password?: string;
}

export = UserModel;
