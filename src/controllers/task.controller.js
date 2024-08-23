import { Task } from "../models/task.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerTask = asyncHandler(async (req, res) => {
  const { title, content, category, tags } = req.body;
  if ([title, content, category, tags].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const newTask = await Task.create({
    title,
    content,
    category,
    tags,
  });
  if (!newTask) {
    throw new ApiError(500, "Somethiong went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newTask, "Task register successfully"));
});

const getAllTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  if (!tasks) {
    throw new ApiError(500, "Something went wrong while getting all tasks");
  }
  return res.status(200).json(tasks);
});

const getTaskById = asyncHandler(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findById(taskId);
  if (!task) {
    throw new ApiError(500, "Something went wrong while getting the task");
  }
  return res.status(200).json(task);
});

const deletTaskById = asyncHandler(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.deleteOne({ _id: taskId });
  if (!task) {
    throw new ApiError(404, "No such task registered!");
  }
  return res.status(200).json(task);
});
const updateTaskById = asyncHandler(async (req, res) => {
  const taskId = req.params.id;
  const { title, content, category, tags } = req.body;
  const updates = { title, content, category, tags };
  const updatedTask = await Task.updateOne({ _id: taskId }, updates);
  if (!updatedTask) {
    throw new ApiError(404, "No such task registered!");
  }
  return res.status(200).json(updatedTask);
});

const getTaskBySearchItems = asyncHandler(async (req, res) => {
  const { searchTerm } = req.query;
  if (!searchTerm) {
    return res.status(400).json({ message: "Search term is required" });
  }
  console.log(searchTerm);

  const searchRegex = new RegExp(searchTerm, "i");
  const tasks = await Task.find({
    $or: [
      { title: searchRegex },
      { content: searchRegex },
      { category: searchRegex },
      { tags: searchRegex },
    ],
  });

  return res.status(200).json(tasks);
});
export {
  registerTask,
  getAllTask,
  getTaskById,
  deletTaskById,
  updateTaskById,
  getTaskBySearchItems,
};
