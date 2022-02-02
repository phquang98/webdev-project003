import { Entity, Column } from "typeorm";
import { User } from "./user.entity";

@Entity("student")
export class Student extends User {
  @Column()
  studyYear: number;

  @Column()
  academicYear: string;

  @Column()
  programme: string;
}
