import monogoose from "mongoose";

const taskSchema = new monogoose.Schema(
  {
    processId: {
      type: String,
      ref: "Process",
    },
    name: {
      type: String,
      // required: true,
    },
    start_date: {
      type: String,
      // required: true,
    },
    end_date: {
      type: String,
      // required: true,
    },
    requirements: {
      type: String,
      // required: true,
    },
    totalPercent: {
      type: Number,
      // required: true,
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
