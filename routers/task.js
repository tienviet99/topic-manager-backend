import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskById,
  getTaskByProcessId,
  updateTask,
} from "../controllers/task.js";

const router = express.Router();

router.get("/task/list", getTask);

router.get("/task/list/:processId", getTaskByProcessId);

router.get("/task/findtask/:id", getTaskById);

router.post("/task/create", createTask);

router.put("/task/update/:id", updateTask);

router.delete("/task/delete/:id", deleteTask);

export default router;
