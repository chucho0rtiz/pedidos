import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  Delete
} from "@nestjs/common";
import { direccionService } from "../service/direccion.service";
import { direccionCrearDto } from "../dto/direccion-crear.dto";
import { direccionUpdateDto } from "../dto/direccion-update.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("direcciones")
@Controller("direccion")
export class DireccionController {
  constructor(private direccionService: direccionService) {}

  @Post()
  gurdar(@Body() direccionCrearDto: direccionCrearDto): any {
    return this.direccionService.guardar(direccionCrearDto);
  }

  @Get(":id")
  buscar(@Param("id") id: number): any {
    return this.direccionService.buscar(id);
  }

  @Get()
  listar() {
    return this.direccionService.listar();
  }

  @Patch(":id")
  modificar(
    @Param("id") id: number,
    @Body() direccionUpdateDto: direccionUpdateDto
  ): any {
    return this.direccionService.modificar(id, direccionUpdateDto);
  }

  @Delete(":id")
  eliminar(@Param("id") id: number) {
    return this.direccionService.eliminar(id);
  }
}
