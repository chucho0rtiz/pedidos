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
import { pedidoService } from "../service/pedido.service";
import { pedidoCrearDto } from "../dto/pedido-crear.dto";
import { pedidoUpdateDto } from "../dto/pedido-update.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("pedidos")
@Controller("pedido")
export class PedidoController {
  constructor(private pedidoService: pedidoService) {}

  @Post()
  gurdar(@Body() pedidoCrearDto: pedidoCrearDto): any {
    return this.pedidoService.guardar(pedidoCrearDto);
  }

  @Get(":id")
  buscar(@Param("id") id: number): any {
    return this.pedidoService.buscar(id);
  }

  @Get()
  listar() {
    return this.pedidoService.listar();
  }

  @Patch(":id")
  modificar(
    @Param("id") id: number,
    @Body() userUpdateDto: pedidoUpdateDto
  ): any {
    return this.pedidoService.modificar(id, userUpdateDto);
  }

  @Delete(":id")
  eliminar(@Param("id") id: number) {
    return this.pedidoService.eliminar(id);
  }
}
