// import { RequestHandler } from "express";

export type newReqParams = { studentIDHere: string } | { courseIDHere: string };

export type xReqParams = {
  studentIDHere: string;
};

export type xReqBody = {
  data: TStudent | TCourse;
};

// TODO: for filter and advance search later
export type xReqQuery = Record<string, never>;

// NOTE: no need typeguard, as here we put stuff inside responseData, not extract from it -> DGAF
export type xResBody = {
  msg: string;
  affectedResource: string;
  responseData?: TStudent | TTeacher | TCourse | TStudent[] | TTeacher[] | TCourse[];
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

export type TCourse = {
  id: string;
  name: string;
  shortDescription: string;
};

// type Fish = {
//   swimSpeed: string;
//   swim: () => void;
// };

// type Bird = {
//   flySpeed: string;
//   fly: () => void;
// };

// const isFish = (pet: Fish | Bird): pet is Fish => (pet as Fish).swimSpeed !== undefined;
