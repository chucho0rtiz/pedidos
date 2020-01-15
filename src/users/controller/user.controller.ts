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
import { userService } from "../service/User.service";
import { userCrearDto } from "../dto/user-crear.dto";
import { userUpdateDto } from "../dto/user-update.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("user")
export class UserController {
  constructor(private userService: userService) {}

  @Post()
  gurdar(@Body() userCrearDto: userCrearDto): any {
    return this.userService.guardar(userCrearDto);
  }

  @Get(":id")
  buscar(@Param("id") id: number): any {
    return this.userService.buscar(id);
  }

  @Get()
  listar() {
    return this.userService.listar();
  }

  @Patch(":id")
  modificar(
    @Param("id") id: number,
    @Body() userUpdateDto: userUpdateDto
  ): any {
    return this.userService.modificar(id, userUpdateDto);
  }

  @Delete(":id")
  eliminar(@Param("id") id: number) {
    return this.userService.eliminar(id);
  }
}
