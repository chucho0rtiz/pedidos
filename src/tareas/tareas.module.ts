import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tareas } from "src/entitys/tareas.entity";
import { TareaController } from "./controller/tarea.controller";
import { tareaService } from "./service/Tarea.service";

@Module({
  imports: [TypeOrmModule.forFeature([tareas])],
  exports: [tareaService],
  controllers: [TareaController],
  providers: [tareaService]
})
export class TareasModule {}
