import mongoose from "mongoose";

const birthdaySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Birthday = mongoose.model("Birthday", birthdaySchema);
