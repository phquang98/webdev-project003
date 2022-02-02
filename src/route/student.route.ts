import express from "express";
import {
  createResource,
  getAllResource,
  getResource,
  updateResource,
  deleteResource
} from "../controller/student.controller";

const studentRouter = express.Router();

studentRouter.get("/", getAllResource);
studentRouter.get("/:studentIDHere", getResource);
studentRouter.post("/", createResource);
studentRouter.put("/:studentIDHere", updateResource);
studentRouter.delete("/:studentIDHere", deleteResource);

export { studentRouter };
