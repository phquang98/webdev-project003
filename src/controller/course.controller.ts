import { RequestHandler } from "express";
import { getRepository } from "typeorm";

import { Course } from "../entity/course.entity";
import { newReqParams, xLocals, xReqBody, xReqQuery, xResBody } from "../utils";

export const getOneResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    if ("courseIDHere" in req.params) {
      const { courseIDHere } = req.params;
      const suspect = await getRepository(Course).findOne(courseIDHere);
      return suspect
        ? res.status(200).json({ msg: "Got one", affectedResource: "Course", responseData: suspect })
        : res.status(404).json({ msg: "Failed to get one 1: not found", affectedResource: "Course" });
    } else {
      return res
        .status(400)
        .json({ msg: "Failed to get one 2: params missing or malformed", affectedResource: "Course" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get one 3: bad req", affectedResource: "Course" });
  }
};

export const getAllResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    const queryResult = await getRepository(Course).find();
    return res.status(200).json({ msg: "Got all", affectedResource: "Course", responseData: queryResult });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to get all 1: bad req", affectedResource: "Course" });
  }
};

export const createResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  const { data } = req.body;

  try {
    if (data && "shortDescription" in data) {
      const suspect = await getRepository(Course).findOne(data);
      if (suspect) {
        return res.status(400).json({ msg: "Failed to create 1: already existed", affectedResource: "Course" });
      } else {
        const tmpInstnc = getRepository(Course).create(data);
        const sqlResult = await getRepository(Course).save(tmpInstnc);
        return res.status(201).json({ msg: "Created", affectedResource: "Course", responseData: sqlResult });
      }
    } else {
      return res.status(400).json({
        msg: "Failed to create 2: body missing, malformed or invalid",
        affectedResource: "Course"
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Failed to create 3: bad req",
      affectedResource: "Course"
    });
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
    if ("courseIDHere" in req.params && data && "shortDescription" in data) {
      const { courseIDHere } = req.params;

      const suspect = await getRepository(Course).findOne(courseIDHere);
      if (suspect && suspect.id === data.id) {
        const tmpResource = getRepository(Course).create(data);
        const queryResult = await getRepository(Course).save(tmpResource);

        return res.status(200).json({ msg: "Updated", affectedResource: "Course", responseData: queryResult });
      } else {
        return res.status(404).json({
          msg: "Failed to update 1: not found or mismatch id between req body vs path params",
          affectedResource: "Course"
        });
      }
    } else {
      return res
        .status(400)
        .json({ msg: "Failed to update 2: check path params & req body", affectedResource: "Course" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to update 3: bad req", affectedResource: "Course" });
  }
};

export const deleteResource: RequestHandler<newReqParams, xResBody, xReqBody, xReqQuery, xLocals> = async (
  req,
  res,
  _next
) => {
  try {
    if ("courseIDHere" in req.params) {
      const { courseIDHere } = req.params;
      const suspect = await getRepository(Course).findOne({ id: courseIDHere });

      if (suspect) {
        const queryResult = await getRepository(Course).remove(suspect);
        return res.status(200).json({ msg: "Deleted", affectedResource: "Course", responseData: queryResult });
      }
      return res.status(404).json({ msg: "Failed to deleted 1: not found", affectedResource: "Course" });
    } else {
      return res
        .status(400)
        .json({ msg: "Failed to delete 2: path params missing or malformed", affectedResource: "Course" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Failed to deleted 3: bad req", affectedResource: "Course" });
  }
};
