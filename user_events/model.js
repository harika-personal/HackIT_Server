import mongoose from "mongoose";
import userEventsSchema from "./schema.js";
import userSchema from "../users/schema.js";

const model = mongoose.model("User_Events", userEventsSchema);
const userModel = mongoose.model("Users", userSchema);

export { model, userModel };
