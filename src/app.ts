import { errors } from "celebrate";
import express, { Application, Response } from "express";
import connectDB from "./config/db";
import authRoute from "./routes/auth";

const app: Application = express();

connectDB(); //connect to databse

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

app.use(errors()); //celebrate error handler middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
