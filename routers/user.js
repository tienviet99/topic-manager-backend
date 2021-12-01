import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  getUserByUserId,
  searchUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/user/list", getUser);

router.get("/user/findid/:id", getUserById);

router.get("/user/findUserId/:keyword", getUserByUserId);

router.post("/user/create", createUser);

router.put("/user/update/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

router.post("/user/search", searchUser);

export default router;
