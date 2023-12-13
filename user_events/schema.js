import mongoose from "mongoose";

const userEventsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
      required: true,
    },
    bookmarked: {
      type: Boolean,
   //   required: true,
    },
    registered: {
      type: Boolean,
      required: true,
    },
    externalLink: {
      type: String,
      //required: true,
    },
    eventType: {
      type: String,
      //required: true,
    },
    eventName: {
      type: String,
     // required: true,
    },
    userRating: {
      type: Number,
     // required: true,
    },
  },
  { collection: "User_Events" } 
);

export default userEventsSchema;
