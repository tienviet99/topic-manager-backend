import mongooes from "mongoose";

const topicSchema = new mongooes.Schema(
  {
    topicId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    teacherId: {
      type: String,
      ref: "User",
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    major: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const TopicModel = mongooes.model("Topic", topicSchema);
