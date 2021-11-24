import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  searchUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/user/list", getUser);

router.post("/user/create", createUser);

router.put("/user/edit/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

router.post("/user/search", searchUser);

export default router;
