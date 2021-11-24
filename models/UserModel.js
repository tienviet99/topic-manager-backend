import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    date: {
      type: String,
    },
    phone: {
      type: String,
    },
    major: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
    completeTopic: {
      type: String,
      ref: "Topic",
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
