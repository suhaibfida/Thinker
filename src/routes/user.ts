import express from "express";
import { Router } from "express";
import { UserModel } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jSecret = process.env.jSecret!;
const userRouter = Router();
userRouter.use(express.json());
userRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await UserModel.create({
    username: username,
    password: password,
  });
  res.json({
    meassage: "User Signed Up",
  });
});
userRouter.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      jSecret
    );
    res.json({
      token,
    });
  } else {
    res.json({
      message: "not found",
    });
  }
});
userRouter.post("/content", (req, res) => {});
userRouter.get("/showcontent", (req, res) => {});
userRouter.delete("/deletecontent", (req, res) => {});
userRouter.get("/:shareLink", (req, res) => {});
export { userRouter };
