import mongoose from "mongoose";
import userSchema from "./schema.js";
const model = mongoose.model("Users", userSchema);
export default model;

