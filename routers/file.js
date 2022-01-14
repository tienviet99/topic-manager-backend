import express from "express";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { createFile, getFileByName } from "../controllers/file.js";

const URI = "mongodb://127.0.0.1:27017/topic-manager";
const storage = new GridFsStorage({
  url: URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileName = file;
      const fileInfo = {
        fileName: fileName,
        bucketName: "uploads",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/file/upload", upload.single("file"), createFile);

router.get("/file/getByName/:filename", getFileByName);

export default router;
