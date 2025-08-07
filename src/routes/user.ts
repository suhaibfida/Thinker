import express from "express";
import { Router } from "express";
import { UserModel } from "../db.js";
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
userRouter.post("/signin", (req, res) => {});
userRouter.post("/content", (req, res) => {});
userRouter.get("/showcontent", (req, res) => {});
userRouter.delete("/deletecontent", (req, res) => {});
userRouter.get("/:shareLink", (req, res) => {});
export { userRouter };
