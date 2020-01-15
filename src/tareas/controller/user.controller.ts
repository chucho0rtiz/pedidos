import { Controller, Post, Body, Get, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { userService } from '../service/User.service';
import { userCrearDto } from '../dto/user-crear.dto';
import { userUpdateDto } from '../dto/user-update.dto';

@Controller('user')
export class UserController {
    constructor(private _userService : userService){

    }

    @Post()
    gurdar(@Body() userCrearDto : userCrearDto) : any{
        return this._userService.guardar(userCrearDto);
    }

    @Get(":id")
    buscar(@Param("id") id: number) :any{
        return this._userService.buscar(id);
        
    }

    @Get()
    listar(){
        return this._userService.listar();
    }

    @Patch(":id")
    modificar(@Param("id") id : number, 
    @Body() userUpdateDto: userUpdateDto
    ) : any{
        return this._userService.modificar(id,userUpdateDto);
    }

}
