import express from "express";
import { createResource, getAllResource, getResource } from "../controller/student.controller";

const studentRouter = express.Router();

studentRouter.get("/", getAllResource);
studentRouter.get("/:studentIDHere", getResource);
studentRouter.post("/", createResource);
studentRouter.put("/:studentIDHere");
studentRouter.delete("/:studentIDHere");

export { studentRouter };
