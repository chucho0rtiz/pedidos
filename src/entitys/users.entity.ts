import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne
} from "typeorm";
import { direciones } from "./direcciones.entity";
import { personas } from "./personas.entity";
import { tareas } from "./tareas.entity";
import { pedidos } from "./pedidos.entity";

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column({ nullable: false, default: "Cliente" })
  rol: string;

  @Column({ nullable: false, default: 1 })
  estado: number;

  @OneToMany(
    type => direciones,
    direcciones => direcciones.user
  )
  userDir: direciones[];

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
