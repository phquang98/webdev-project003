import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import express from "express";

import { xConfig } from "./config";
import { studentRouter } from "./route/student.route";
import { courseRouter } from "./route/course.route";

// --- Config + Initiate server ---
dotenv.config();
const port = process.env.PORT_NUMBER_HERE || 3000; //

const app = express();

// --- Top Lv Middlewares ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(cors());

// --- Run server ---
app.get("/healthcheck", (req, res, _next) => {
  return res.status(200).json({ msg: "Hello there!" });
});

app.post("/healthcheck", (req, res, _next) => {
  if (req.body.myNameIs) {
    return res.status(200).json({ msg: "Request received with desired key", reqBody: req.body });
  } else {
    return res.status(400).json({ msg: "Bad request! Maybe req.body is missing key prop!" });
  }
});

// --- Ini server ---
xConfig.cxnPostgresDB();
app.use("/student", studentRouter);
app.use("/course", courseRouter);

// --- Start server ---
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
