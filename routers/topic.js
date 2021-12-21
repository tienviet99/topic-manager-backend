import express from "express";
import {
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
  searchTopic,
  searchTopicStatus,
  getTopicById,
} from "../controllers/topic.js";

const router = express.Router();

router.get("/topic/list", getTopic);

router.post("/topic/create", createTopic);

router.put("/topic/update/:id", updateTopic);

router.delete("/topic/delete/:id", deleteTopic);

router.post("/topic/search", searchTopic);

router.get("/topic/searchstatus/:status", searchTopicStatus);

router.get("/topic/:id", getTopicById);

export default router;
