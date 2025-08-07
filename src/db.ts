import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbUrl = process.env.DBURL;
if (!dbUrl) {
  throw new Error("Url iks not defined");
}

try {
  mongoose.connect(dbUrl);
} catch {
  console.log("500");
}
const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
});
export const UserModel = model("user", UserSchema);
