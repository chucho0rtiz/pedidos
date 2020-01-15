import {IsNotEmpty, MinLength, IsEmail, IsInt, Min, Max, MaxLength, ValidateIf, } from "class-validator";

export class pedidoCrearDto {
    @IsNotEmpty({message: "La dirección es requerida"})
    readonly direccion : string;
    
    @IsNotEmpty({message: "La fecha de entrega es requerida"})
    readonly fechaEntrega : string;

    @IsNotEmpty({message: "La franja horaria 1 es requerida"})
    readonly franjaHora1 : string;
    
    @IsNotEmpty({message: "La franja horaria 2 es requerida"})
    readonly franjaHora2 : string;

    @IsNotEmpty({message: "El nombre es requerido"})
    readonly nombre : string;
    
    @IsNotEmpty({message: "El apellido es requerido"})
    readonly apellido : string;
    
    @IsNotEmpty({message: "El email es requerido"})
    @IsEmail({},{message: "El email debe tener un formato correcto"})
    readonly email : string;
    
    @Min(1000000, {message:"El telefono debe ser mayor o igual a 7 caracteres"})
    @IsInt({message: "El telefono debe ser numerico"})
    readonly telefono :  number;

    @IsNotEmpty({message: "El userId es requerido"})
    readonly userId;

}