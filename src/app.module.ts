import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './entitys/users.entity';
import { direciones } from './entitys/direcciones.entity';
import { tareas } from './entitys/tareas.entity';
import { pedidos } from './entitys/pedidos.entity';
import { personas } from './entitys/personas.entity';

@Module({
  imports: [UsersModule, PedidosModule, TareasModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pedidos',
      entities: [users, direciones, tareas, pedidos, personas],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
