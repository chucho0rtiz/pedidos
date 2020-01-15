import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne
} from "typeorm";
import { direcciones } from "./direcciones.entity";
import { tareas } from "./tareas.entity";
import { pedidos } from "./pedidos.entity";

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  userName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "Cliente" })
  rol: string;

  @Column({ default: 1 })
  estado: number;

  @OneToMany(
    type => direcciones,
    direcciones => direcciones.user
  )
  userDir: direcciones[];

  @OneToMany(
    type => tareas,
    tareas => tareas.user
  )
  userTar: tareas[];

  @OneToMany(
    type => pedidos,
    pedidos => pedidos.user
  )
  userPed: pedidos[];
}
