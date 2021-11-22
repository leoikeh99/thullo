const jwt = require("jsonwebtoken");
import config from "../config/config";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorized, token needed for authorization" });
  }
  try {
    const decode = jwt.verify(token, config.JWT_SECRET);
    res.locals.user = decode.user;
    next();
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};
