import { Router } from "express";
import { registerTask } from "../controllers/task.controller.js";

const router = Router();
router.route("/registertask").post(registerTask);
export default router;
