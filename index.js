import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import topic from "./routers/topic.js";
import user from "./routers/user.js";
import process from "./routers/process.js";
import task from "./routers/task.js";
import report from "./routers/report.js";
import auth from "./routers/auth.js";
import file from "./routers/file.js";

const app = express();
const PORT = 5000;
export const URI = "mongodb://127.0.0.1:27017/topic-manager";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/api", topic);
app.use("/api", user);
app.use("/api", process);
app.use("/api", task);
app.use("/api", report);
app.use("/api", auth);
app.use("/api", file);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to BD");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
