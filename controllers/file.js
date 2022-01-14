import mongoose from "mongoose";
import Grid from "gridfs-stream";
import express from "express";

const URI = "mongodb://127.0.0.1:27017/topic-manager";
const conn = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

export const createFile = (req, res) => {
  res.json({ file: req.file });
};

const gridSchema = new mongoose.Schema({}, { strict: false });
const grid = mongoose.model("Grid", gridSchema, "uploads.file");
export const getFileByName = async (req, res) => {
  try {
    const file = await grid.findOne({ filename: req.parms.filename }, (err, file) => {
      
    });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
