import mongoose from "mongoose";

const reportChema = new mongoose.Schema({
  taskId: {
    type: String,
    ref: "Task",
  },
  description: {
    type: String,
    require: true,
  },
  link: {
    type: String,
  },
  percent: {
    type: Number,
    max: 100,
    default: 0,
  },
  point: {
    type: Number,
    max: 100,
  },
});

export const ReportModel = mongoose.model("Report", reportChema);
