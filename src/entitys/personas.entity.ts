import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { users } from './users.entity';

@Entity()
export class personas {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    apellido: string;
  
    @Column()
    email: string;
  
    @Column()
    telefono: number;
    
    @OneToOne(type => users)
    @JoinColumn()
    user: users;
}