import {IsNotEmpty, MinLength, IsEmail, IsInt, Min, Max, MaxLength, ValidateIf, IsDefined, validate, } from "class-validator";

export class userCrearDto {
    @IsNotEmpty({message: "El userName es requerido"})
    readonly userName : string;
    
    @IsNotEmpty({message: "La contraseña es requerido"})
    @MinLength(8,{message: "La contraseña debe ser mayor a 8 caracteres"})
    readonly password : string;
    
    // @IsNotEmpty({message: "El rol es requerido"})
    readonly rol : string;
    
    // @IsNotEmpty({message: "El estado es requerido"})
    readonly estado : number;
}