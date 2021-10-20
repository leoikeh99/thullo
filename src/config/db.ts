import mongoose from "mongoose";
import { ConnectionOptions } from "tls";
import config from "./config";
const dbUri: string = config.MONGO_URI;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUri, config.MONGO_OPTIONS as ConnectionOptions);
    console.log("mongodb connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
