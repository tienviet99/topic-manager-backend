import mongoose from "mongoose";

const processSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      ref: "User",
    },
    teacherId: {
      type: String,
      ref: "User",
    },
    topicId: {
      type: String,
      ref: "Topic",
    },
    status: {
      type: Boolean,
      default: true,
    },
    point: {
      type: Number,
      max: 100,
    },
    percent: {
      type: Number,
      max: 100,
    },
  },
  { timestamps: true }
);

export const ProcessModel = mongoose.model("Process", processSchema);
