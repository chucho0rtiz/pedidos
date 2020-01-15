import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { users } from "./users.entity";

@Entity()
export class direcciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  direccion: string;

  @Column()
  userId: number;

  @ManyToOne(
    type => users,
    users => users.userDir
  )
  user: users;
}
