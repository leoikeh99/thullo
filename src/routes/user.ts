import express, { Request, Response } from "express";
import User from "../models/schemas/user.schema";
import { celebrate } from "celebrate";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/", auth, async (req: Request, res: Response) => {
  const id = res.locals.user.id;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(400).json({ msg: "Invalid user" });
    }

    res.json(user);
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
