
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  _id: String,
  title: { type: String, required: true },
  description: String,
  time: String,
  venue: String,
  imageUrl: String,
});

export default eventSchema;