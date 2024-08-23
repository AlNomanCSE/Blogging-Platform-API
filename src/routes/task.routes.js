import { Router } from "express";
import {
  registerTask,
  getAllTask,
  getTaskById,
  deletTaskById,
  updateTaskById,
  getTaskBySearchItems,
} from "../controllers/task.controller.js";

const router = Router();
router.route("/registertask").post(registerTask);
router.route("/").get(getAllTask);
router.route("/search").get(getTaskBySearchItems);
router.route("/:id").get(getTaskById).delete(deletTaskById).put(updateTaskById);

export default router;
