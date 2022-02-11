import express from "express";
import {
  createResource,
  getAllResource,
  getOneResource,
  updateResource,
  deleteResource
} from "../controller/course.controller";

const courseRouter = express.Router();

courseRouter.get("/", getAllResource);
courseRouter.get("/:courseIDHere", getOneResource);
courseRouter.post("/", createResource);
courseRouter.put("/:courseIDHere", updateResource);
courseRouter.delete("/:courseIDHere", deleteResource);

export { courseRouter };
