// import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

// @Entity("student")
// export class Student extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({
//     unique: true
//   })
//   iban: string;

//   @Column({ default: "EZBKXXXX" })
//   swift_bic: string;

//   @CreateDateColumn()
//   createdTS: Date;

//   // TODO: never negative ?
//   @Column()
//   balance: number;

//   @Column()
//   customerId: string;
// }
