import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskByProcessId,
  updateTask,
} from "../controllers/task.js";

const router = express.Router();

router.get("/task/list", getTask);

router.get("/task/list/:processId", getTaskByProcessId);

router.post("/task/create", createTask);

router.put("/task/update/:id", updateTask);

router.delete("/task/delete/:id", deleteTask);

export default router;
