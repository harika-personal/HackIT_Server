import mongoose from "mongoose";
import eventSchema from "./schema.js";

const model = mongoose.model("Events", eventSchema);
export default model;