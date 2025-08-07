import express from "express";
const app = express();
import { userRouter } from "./routes/user.js";
app.use("/api/v1/user", userRouter);
app.listen(3000);
