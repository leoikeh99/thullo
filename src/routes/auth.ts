import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/schemas/user.schema";
import { celebrate } from "celebrate";
import { LoginUserSchema, RegisterUserSchema } from "../middleware/Validation";
import config from "../config/config";

const router = express.Router();
type user = { email: string; password: string };
type payload = { user: { id: string } };

router.post(
  "/register",
  celebrate(RegisterUserSchema),
  async (req: Request, res: Response): Promise<any> => {
    const { email, password }: user = req.body;

    try {
      const checkEmail = await User.findOne({
        email: email.toLocaleLowerCase(),
      });
      if (checkEmail) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      var newUser = new User({
        email: email.toLocaleLowerCase(),
        password,
      });

      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

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
        res.json({ msg: "Invalid email or password" });
      }

      var _password: string = checkUser.password;
      const checkPassword = await bcrypt.compare(password, _password);

      if (!checkPassword) {
        res.json({ msg: "Invalid email or password" });
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
      console.error(err.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

export default router;
