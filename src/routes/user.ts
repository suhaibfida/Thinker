import express from "express";
import { Router } from "express";
import { UserModel, ContentModel, LinkModel } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userMiddleware } from "../middlewares/userMiddleware.js";
import { shareLink } from "../shareLink.js";
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
userRouter.post("/user/content", userMiddleware, (req, res) => {
  const title = req.body.title;
  const link = req.body.link;
  ContentModel.create({
    title,
    link,
    tags: [],
    //@ts-ignore
    userId: req.userId,
  });
  res.json({
    message: "Content added",
  });
});
userRouter.get("/user/showcontent", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({
    userId,
  }).populate("userId", "username");
  res.json({
    content,
  });
});
userRouter.delete("/user/deletecontent", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId,
  });
  res.json({
    message: "data deleted Successfully",
  });
});
userRouter.get("/user/share", userMiddleware, async (req, res) => {
  const share = req.body.share;
  const existingUser = await LinkModel.findOne({
    //@ts-ignore
    userId: req.userId,
  });
  if (existingUser) {
    res.json({
      message: "sharable link already exists",

      //@ts-ignore
      hash: existingUser.hash,
    });
  } else {
    const hash = shareLink(20);
    if (share) {
      await LinkModel.create({
        //@ts-ignore
        userId: req.userId,
        hash: hash,
      });
    } else {
      await LinkModel.deleteOne({
        //@ts-ignore
        userId: req.userId,
      });
    }
    res.json({
      hash,
      message: "shareable link is updated",
    });
  }
});
export { userRouter };
