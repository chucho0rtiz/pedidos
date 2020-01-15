import {IsNotEmpty, MinLength, IsEmail, IsInt, Min, Max, MaxLength, ValidateIf, IsEmpty, } from "class-validator";

export class personaUpdateDto {
    // @IsEmpty()
    readonly nombre : string;
    
    // @IsEmpty()
    readonly apellido : string;
    
    // @IsEmpty()
    // @IsEmail({},{message: "El email debe tener un formato correcto"})
    readonly email : string;

    // @IsEmpty()
    // @Min(1000000, {message:"El telefono debe ser mayor o igual a 7 caracteres"})
    // @IsInt({message: "El telefono debe ser numerico"})
    readonly telefono :  number;

    readonly userId;
}