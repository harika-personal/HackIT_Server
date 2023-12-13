import mongoose from "mongoose";
import userEventsSchema from "./schema.js";

const model = mongoose.model("User_Events", userEventsSchema);
export default model;