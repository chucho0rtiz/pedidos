import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { users } from './users.entity';
import { pedidos } from './pedidos.entity';

@Entity()
export class tareas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: number;

  @Column()
  userId: number;

  @Column()
  pedidoId: number;

  @ManyToOne(type => users, users => users.userTar)
  user: users;

  @ManyToOne(type => pedidos, pedidos => pedidos.pedidoTar)
  pedido: pedidos;
}