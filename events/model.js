import mongoose from "mongoose";
import eventSchema from "./eventSchema.js";

const model = mongoose.model("Events", eventSchema);
export default model;