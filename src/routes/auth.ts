import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/schemas/user.schema";
import { celebrate } from "celebrate";
import { LoginUserSchema, RegisterUserSchema } from "../middleware/Validation";
import config from "../config/config";
import passport from "passport";
import { CompareString, Encrypt } from "../services/encrypt.service";

const router = express.Router();
type user = { email: string; password: string; username: string };
type payload = { user: { id: string } };

router.post(
  "/register",
  celebrate(RegisterUserSchema),
  async (req: Request, res: Response): Promise<any> => {
    const { email, password, username }: user = req.body;

    try {
      const checkEmail = await User.findOne({
        email: email.toLocaleLowerCase(),
      });
      if (checkEmail) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      const checkUsername = await User.findOne({ username });
      if (checkUsername) {
        return res.status(400).json({ msg: "Username already exists" });
      }

      const _password = await Encrypt(password, 10);
      var newUser = new User({
        email: email.toLocaleLowerCase(),
        password: _password,
        username,
      });

      const saveUser = await newUser.save();
      if (!saveUser) {
        return res.status(400).json({ msg: "Registration error" });
      }

      const payload: payload = {
        user: {
          id: newUser.id,
        },
      };

      jwt.sign(
        payload,
        config.JWT_SECRET,
        { expiresIn: "7d" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err: any) {
      console.error(err.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

router.post(
  "/login",
  celebrate(LoginUserSchema),
  async (req: Request, res: Response): Promise<any> => {
    const { email, password }: user = req.body;

    try {
      const checkUser: any = await User.findOne({
        email: email.toLocaleLowerCase(),
      });

      if (!checkUser) {
        return res.status(400).json({ msg: "Invalid email or password" });
      }

      var _password: string = checkUser.password;
      const checkPassword = await CompareString(password, _password);

      if (!checkPassword) {
        return res.status(400).json({ msg: "Invalid email or password" });
      }

      const payload: payload = {
        user: {
          id: checkUser.id,
        },
      };

      jwt.sign(
        payload,
        config.JWT_SECRET,
        { expiresIn: "7d" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err: any) {
      // console.error(err);
      res.status(500).json({ msg: "server error" });
    }
  }
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req: Request, res: Response) => {
    const { _id }: any = req.user;
    const payload: payload = {
      user: {
        id: _id,
      },
    };
    jwt.sign(payload, config.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.cookie("auth", token);
      res.writeHead(302, {
        Location: "http://localhost:3000/login",
      });
      res.end();
    });
  }
);

export default router;
