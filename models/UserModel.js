import mongooses from "mongoose";

const userSchema = new mongooses.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    completeTopic: [
      {
      type: String,
      ref: "Topic",
      },
    ]
  },
  {timestamps: true}
)

export const UserModel = mongooses.model("User",userSchema)