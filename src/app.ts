import { errors } from "celebrate";
import express, { Application } from "express";
import connectDB from "./config/db";
import authRoute from "./routes/auth";
const passportSetup = require("./config/passportSetup");
import cookieSession from "cookie-session";
import passport from "passport";
import config from "./config/config";

const app: Application = express();

connectDB(); //connect to database

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);

app.use(errors()); //celebrate error handler middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
