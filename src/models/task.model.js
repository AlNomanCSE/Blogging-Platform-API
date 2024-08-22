import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: [String],
      default: [],
    },
  ],
});

export const Task = mongoose.model("Task", taskSchema);
