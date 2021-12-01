import express from "express";
import {
  getReport,
  getReportByTaskId,
  updateReport,
  createReport,
  deleteReport,
} from "../controllers/report.js";

const router = express.Router();

router.get("/report/list", getReport);

router.get("/report/list/:taskId", getReportByTaskId);

router.put("/report/update/:id", updateReport);

router.post("/report/create", createReport);

router.delete("/report/delete/:id", deleteReport);

export default router;
