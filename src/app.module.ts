import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { PedidosModule } from "./pedidos/pedidos.module";
import { TareasModule } from "./tareas/tareas.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { users } from "./entitys/users.entity";
import { direcciones } from "./entitys/direcciones.entity";
import { tareas } from "./entitys/tareas.entity";
import { pedidos } from "./entitys/pedidos.entity";
import { direccionesModule } from "./direcciones/direcciones.module";
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    PedidosModule,
    TareasModule,
    direccionesModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "pedidos",
      entities: [users, direcciones, tareas, pedidos],
      synchronize: true
    }) //, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
