import { RequestHandler } from "express";
import { getRepository } from "typeorm";

import { Student } from "../entity/student.entity";
import { xLocals, xReqBody, newReqParams, xReqQuery, xResBody } from "../utils";

export const getOneResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    if ("studentIDHere" in req.params) {
      const { studentIDHere } = req.params;
      const suspect = await getRepository(Student).findOne(studentIDHere);
      if (suspect) {
        return res.status(200).json({ msg: "Got one", affectedResource: "Student", responseData: suspect });
      } else {
        return res
          .status(404)
          .json({ msg: "Failed to get one 1: not found", affectedResource: "Student", responseData: suspect });
      }
    }
    return res
      .status(400)
      .json({ msg: "Failed to get one 2: params missing or malformed", affectedResource: "Student" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get 3: bad req", affectedResource: "Student" });
  }
};

export const getAllResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    const queryResult = await Student.find();
    return res.status(200).json({ msg: "Got All", affectedResource: "Student", responseData: queryResult });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get all 1: bad req", affectedResource: "Student" });
  }
};

export const createResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    const { data } = req.body;

    if (data && "programme" in data) {
      const suspect = await getRepository(Student).findOne(data.id);
      if (suspect) {
        return res.status(400).json({ msg: "Failed to create 1: already existed", affectedResource: "Student" });
      }
      const tmpInstnc = getRepository(Student).create(data);
      const queryResult = await getRepository(Student).save(tmpInstnc);
      return res.status(201).json({ msg: "Created", affectedResource: "Student", responseData: queryResult });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to create 2: bad req", affectedResource: "Student" });
  }
};

// NOTE: check README
export const updateResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { data } = req.body;

  try {
    if ("studentIDHere" in req.params && data && "programme" in data) {
      const { studentIDHere } = req.params;

      const suspect = await getRepository(Student).findOne(studentIDHere);
      if (suspect && suspect.id === data.id) {
        const tmpInstnc = getRepository(Student).create(data);
        const queryResult = await getRepository(Student).save(tmpInstnc);

        return res.status(200).json({ msg: "Updated", affectedResource: "Student", responseData: queryResult });
      }

      return res.status(404).json({
        msg: "Failed to update 1: not found or mismatch id between req body vs path params",
        affectedResource: "Student"
      });
    }
    return res
      .status(400)
      .json({ msg: "Failed to update 2: check path params & req body", affectedResource: "Student" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to update 3: bad req", affectedResource: "Student" });
  }
};

// NOTE: what remove() returns will miss id prop
export const deleteResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    if ("studentIDHere" in req.params) {
      const { studentIDHere } = req.params;
      const suspect = await getRepository(Student).findOne(studentIDHere);
      if (suspect) {
        const queryResult = await getRepository(Student).remove(suspect);
        return res.status(200).json({ msg: "Deleted", affectedResource: "Student", responseData: queryResult });
      }
      return res.status(404).json({ msg: "Failed to delete 1: not found", affectedResource: "Student" });
    }
    return res
      .status(400)
      .json({ msg: "Failed to delete 2: params missing or malformed", affectedResource: "Student" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to delete 3: bad req", affectedResource: "Student" });
  }
};
