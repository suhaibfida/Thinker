import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JSecret = process.env.JSECRET;

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers["authorization"];
  const verified = jwt.verify(headers as string, JSecret!);
  if (verified) {
    //@ts-ignore
    req.userId = verified.id;
    next();
  } else {
    res.status(400).json({
      message: "You are not logged in",
    });
  }
};
