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
import { tareaService } from "../service/Tarea.service";
import { tareaCrearDto } from "../dto/tarea-crear.dto";
import { tareaUpdateDto } from "../dto/tarea-update.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("tareas")
@Controller("tarea")
export class TareaController {
  constructor(private tareaService: tareaService) {}

  @Post()
  gurdar(@Body() tareaCrearDto: tareaCrearDto): any {
    return this.tareaService.guardar(tareaCrearDto);
  }

  @Get(":id")
  buscar(@Param("id") id: number): any {
    return this.tareaService.buscar(id);
  }

  @Get()
  listar() {
    return this.tareaService.listar();
  }

  @Patch(":id")
  modificar(
    @Param("id") id: number,
    @Body() tareaUpdateDto: tareaUpdateDto
  ): any {
    return this.tareaService.modificar(id, tareaUpdateDto);
  }

  @Delete(":id")
  eliminar(@Param("id") id: number) {
    return this.tareaService.eliminar(id);
  }
}
