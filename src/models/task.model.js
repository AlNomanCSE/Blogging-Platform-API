import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const taskSchema = new Schema({
  taskId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
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
