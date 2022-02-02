// import { RequestHandler } from "express";

export type xReqParams = {
  studentIDHere: string;
};

export type xReqBody = {
  data: TStudent;
};

// TODO: for filter and advance search later
export type xReqQuery = Record<string, never>;

export type xResBody = {
  msg: string;
  affectedResource: string;
  responseData?: TStudent | TTeacher | TStudent[] | TTeacher[];
};

// TODO: for multiple middlewares usage later
export type xLocals = Record<string, never>;

// --- App Core Model Types ---

type TUser = {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  pnum: string;
};

export type TStudent = TUser & {
  studyYear: number;
  academicYear: string;
  programme: string;
};

export type TTeacher = TUser & {
  education: string;
};
