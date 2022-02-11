import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("course")
export class Course extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  shortDescription: string;
}
