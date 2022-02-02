import { RequestHandler, Request } from "express";
import { getRepository, QueryFailedError } from "typeorm";

import { Student } from "../entity/student.entity";
import { xLocals, xReqBody, xReqParams, xReqQuery, xResBody } from "../utils";

export const getResource: RequestHandler<xReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { studentIDHere } = req.params;

  try {
    // TypeORM advises checking for null & undef
    if (studentIDHere) {
      const suspect = await getRepository(Student).findOne({ id: studentIDHere });
      return suspect
        ? res.status(200).json({ msg: "Got", affectedResource: "Student", responseData: suspect })
        : res.status(404).json({ msg: "Failed to get 1: not found", affectedResource: "Student" });
    } else {
      return res.status(400).json({ msg: "Failed to get 2: params missing or malformed", affectedResource: "Student" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get 3: bad req", affectedResource: "Student" });
  }
};

export const getAllResource: RequestHandler<xReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    const resultClt = await Student.find();
    return res.status(200).json({ msg: "Got All", affectedResource: "Student", responseData: resultClt });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to getAll", affectedResource: "Student" });
  }
};

export const createResource: RequestHandler<xReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { data } = req.body;

  try {
    // Typeguard `in`
    if (data && "academicYear" in data) {
      const result = await getRepository(Student).save(data);
      return res.status(201).json({ msg: "Created", affectedResource: "Student", responseData: result });
    } else {
      return res.status(400).json({ msg: "Failed to create 1: data invalid", affectedResource: "Student" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to create 2: bad req", affectedResource: "Student" });
  }
};

export const updateResource: RequestHandler<xReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { studentIDHere } = req.params;
  const { data } = req.body; // WARN: data must have id, FE should add it

  try {
    if (studentIDHere) {
      if (data && "academicYear" in data) {
        const result = await getRepository(Student).save(data);
        return res.status(200).json({ msg: "Updated", affectedResource: "Student", responseData: result });
      } else {
        return res
          .status(400)
          .json({ msg: "Failed to update 1: body missing or malformed", affectedResource: "Student" });
      }
    } else {
      return res
        .status(404)
        .json({ msg: "Failed to update 2: params missing or malformed", affectedResource: "Student" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to updated 3: bad req", affectedResource: "Student" });
  }
};

// NOTE: when remove, what returns will miss id prop
export const deleteResource: RequestHandler<xReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { studentIDHere } = req.params;

  try {
    if (studentIDHere) {
      const suspect = await getRepository(Student).findOne({ id: studentIDHere });
      if (suspect) {
        await getRepository(Student).remove(suspect);
        return res.status(200).json({ msg: "Deleted", affectedResource: "Student", responseData: suspect });
      }
      return res.status(404).json({ msg: "Failed to delete 1: not found", affectedResource: "Student" });
    } else {
      return res
        .status(400)
        .json({ msg: "Failed to delete 2: params missing or malformed", affectedResource: "Student" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to delete 3: bad req", affectedResource: "Student" });
  }
};
