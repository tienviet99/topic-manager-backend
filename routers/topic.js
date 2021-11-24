import express from "express";
import {
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
} from "../controllers/topic.js";

const router = express.Router();

router.get("/topic/list", getTopic);

router.post("/topic/create", createTopic);

router.put("/topic/edit/:id", updateTopic);

router.delete("/topic/delete/:id", deleteTopic);

export default router;
