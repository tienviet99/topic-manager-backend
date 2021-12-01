import express from "express";
import {
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
  searchTopic,
  searchTopicStatus,
} from "../controllers/topic.js";

const router = express.Router();

router.get("/topic/list", getTopic);

router.post("/topic/create", createTopic);

router.put("/topic/update/:id", updateTopic);

router.delete("/topic/delete/:id", deleteTopic);

router.post("/topic/search", searchTopic);

router.get("/topic/searchstatus/:status", searchTopicStatus);

export default router;
