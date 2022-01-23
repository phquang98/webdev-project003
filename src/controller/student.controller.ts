import { RequestHandler, Request } from "express";

import { Student } from "../entity/student.entity";

export const getResource: RequestHandler = async (req, res, _next) => {
  const asd = req.params;

  try {
    if (asd) {
      const suspect = await Student.find({ id: asd.studentIDHere });
      return suspect.length > 0
        ? res.status(200).json({ msg: "Got" })
        : res.status(404).json({ msg: "Failed to get 1" });
    } else {
      return res.status(404).json({ msg: "Failed to get 2" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get 3" });
  }
};

export const getAllResource: RequestHandler = async (req, res, _next) => {
  try {
    const suspectClt = await Student.find();
    return res.status(200).json({ msg: "Got All", suspectClt });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to getAll" });
  }
};

export const createResource: RequestHandler = async (req, res, _next) => {
  try {
    const asd = req.body;
    const instance = await Student.save(asd);
    if (instance) {
      return res.status(200).json({ msg: "Created" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to create" });
  }
};

export const updateResource: RequestHandler = async (req, res, _next) => {
  try {
    const asd = req.body;
    if (asd && asd.id) {
      const suspect = await Student.update({ id: asd.id }, asd);
      // TODO: finish this
    } else {
      return res.status(404).json({ msg: "Failed to update" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to update" });
  }
};

export const deleteResource: RequestHandler = async (req, res, _next) => {
  try {
    const asd = req.body;
    // TODO: finish this
  } catch (error) {
    return res.status(400).json({ msg: "Failed to delete" });
  }
};
