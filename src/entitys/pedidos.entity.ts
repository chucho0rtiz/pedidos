import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { users } from './users.entity';
import { tareas } from './tareas.entity';

@Entity()
export class pedidos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  direccion: string;

  @Column()
  fechaEntrega: string;

  @Column()
  franjaHora1: string;

  @Column()
  franjaHora2: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  telefono: number;

  @Column()
  userId: number;

  @ManyToOne(type => users, users => users.userPed)
  user: users;

  @OneToMany(type => tareas, tareas => tareas.user)
  pedidoTar: tareas[];
}