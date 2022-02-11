import dotenv from "dotenv";
import { createConnection, ConnectionOptions } from "typeorm";
import { Course } from "../entity/course.entity";

import { Student } from "../entity/student.entity";

dotenv.config();

// --- Server Config ---
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER_CONF = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};

// --- TypeORM CXN Config ---
const TYPEORM_POSTGRES_CONF: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME ?? "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Student, Course],
  synchronize: true,
  logging: true
};

// --- CXN Method ---
const tryCXNPostgresDB = async (): Promise<void> => {
  if (Object.values(TYPEORM_POSTGRES_CONF).some((ele) => ele === undefined || ele === "")) {
    console.log("Missing .env props, cxn can't be made.", TYPEORM_POSTGRES_CONF);
    return;
  } else {
    try {
      await createConnection(TYPEORM_POSTGRES_CONF);
      console.log("Connect to DB OK!");
      return;
    } catch (error) {
      console.log("Sth wrong trying to cxn Postgres...", error);
    }
  }
};

export const xConfig = {
  server: SERVER_CONF,
  postgresDB: TYPEORM_POSTGRES_CONF,
  cxnPostgresDB: tryCXNPostgresDB
};
