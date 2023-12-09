
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  numberOfSpots: {
    type: Number,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required:true,
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true, 
  },
  venue: {
    type: String,
    required: true, 
  },
  photo: {
    type: String,
    required: true,
  },
  ratings: {
    overallRating: {
      type: Number,
      required: true,
    },
    numberOfRates: {
      type: Number,
      required: true,
    },
  },
},
{collection: "Events"});

export default eventSchema;