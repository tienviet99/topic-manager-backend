import express from "express";
import {
  createProcess,
  deleteProcess,
  getProcess,
  getProcessStudent,
  getProcessTeacher,
  updateProcess,
} from "../controllers/process.js";

const router = express.Router();

router.get("/process/list", getProcess);

router.get("/process/student/:studentId", getProcessStudent);

router.get("/process/teacher/:teacherId", getProcessTeacher);

router.post("/progress/create", createProcess);

router.put("/process/edit/:id", updateProcess);

router.delete("/process/delete/:id", deleteProcess);

export default router;
