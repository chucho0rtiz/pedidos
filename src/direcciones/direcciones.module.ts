import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { direcciones } from "../entitys/direcciones.entity";
import { DireccionController } from "./controller/direccion.controller";
import { direccionService } from "./service/direccion.service";

@Module({
  imports: [TypeOrmModule.forFeature([direcciones])],
  controllers: [DireccionController],
  providers: [direccionService]
})
export class direccionesModule {}
