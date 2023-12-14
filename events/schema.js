import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      //required: true,
    },
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true,
    },
    summary: {
      type: String,
      //required: true,
    },
    description: {
      type: String,
      //required: true,
    },
    date: {
      type: Date,
      //required: true,
    },
    duration: {
      type: String,
      //required: true,
    },
    timeStart: {
      type: String,
      //required: false,
    },
    timeEnd: {
      type: String,
      //required: false,
    },
    venue: {
      type: String,
      //required: true,
    },
    photo: {
      type: String,
      //required: true,
    },
    ratings: {
      overallRating: {
        type: Number,
        //required: false,
      },
      numberOfRates: {
        type: Number,
        //required: false,
      },
    },
  },
  { collection: "Events" }
);

export default eventSchema;
