import mongoose from "mongoose";
import eventSchema from "./schema.js";

const eventsModel = mongoose.model("Events", eventSchema);
export default eventsModel;