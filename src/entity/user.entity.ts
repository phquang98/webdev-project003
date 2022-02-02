import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  pnum: string;
}
