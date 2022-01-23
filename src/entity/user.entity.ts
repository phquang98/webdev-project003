import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  pnum: string;
}
