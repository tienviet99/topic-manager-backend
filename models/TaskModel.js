import monogoose from "mongoose";

const taskSchema = new monogoose.Schema(
  {
    processId: {
      type: String,
      ref: "Process",
    },
    title: {
      type: String,
      required: true,
    },
    start_day: {
      type: String,
      required: true,
    },
    end_day: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      required: true,
      default: 0,
      max: 100,
    },
    totalPercent: {
      type: Number,
      required: true,
      default: 0,
      max: 100,
    },
    completePercent: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const TaskModel = monogoose.model("Task", taskSchema);
