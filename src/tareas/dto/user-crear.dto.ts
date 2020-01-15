import {IsNotEmpty, MinLength, IsEmail, IsInt, Min, Max, MaxLength, ValidateIf, } from "class-validator";

export class userCrearDto {
    @IsNotEmpty({message: "El userName es requerido"})
    readonly userName : string;
    
    @IsNotEmpty({message: "La contraseña es requerido"})
    @MinLength(8,{message: "La contraseña debe ser mayor a 8 caracteres"})
    readonly password : string;
    
    @IsNotEmpty({message: "El rol es requerido"})
    readonly rol : string;
    
    @IsNotEmpty({message: "El estado es requerido"})
    readonly estado : number;
    
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
}