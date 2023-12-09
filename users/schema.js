import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city: String,
    country: String,
    postalCode: String,
    address: String
  });
  
const userSchema = new mongoose.Schema({
    // _id: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    phoneNumber: String,
    aboutMe: String,
    photo: String,
    dob: Date,
    address: addressSchema,
    role: {
      type: String,
      enum: ["user", "admin", "organizer"],
      default: "user" }
  },
  { collection: "Users" });
export default userSchema;