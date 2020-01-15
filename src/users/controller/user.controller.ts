import { Controller, Post, Body, Get, Patch, Param, HttpException, HttpStatus, Delete } from '@nestjs/common';
import { userService } from '../service/User.service';
import { userCrearDto } from '../dto/user-crear.dto';
import { userUpdateDto } from '../dto/user-update.dto';
import { personaService } from '../service/persona.service';
import { personaCrearDto } from '../dto/persona-crear.dto';

@Controller('user')
export class UserController {
    constructor(private userService : userService, 
        private personaService : personaService){

    }

    @Post()
    // gurdar(@Body() userCrearDto : userCrearDto, @Body() personaCrearDto : personaCrearDto) : any{
    gurdar(@Body() userCrearDto : userCrearDto) : any{
        // this.personaService.guardar(personaCrearDto)
        return this.userService.guardar(userCrearDto);
    }

    @Get(":id")
    buscar(@Param("id") id: number) :any{
        // this.personaService.buscar(id);
        return this.userService.buscar(id);
    }

    @Get()
    listar(){
        return this.userService.listar();
    }

    @Patch(":id")
    modificar(@Param("id") id : number, 
    @Body() userUpdateDto: userUpdateDto
    ) : any{
        return this.userService.modificar(id,userUpdateDto);
    }

    @Delete(":id")
    eliminar(@Param("id") id : number){
        return this.userService.eliminar(id);
    }

}
