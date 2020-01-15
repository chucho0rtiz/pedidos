import {IsNotEmpty, MinLength, IsEmail, IsInt, Min, Max, MaxLength, ValidateIf, IsEmpty, } from "class-validator";

export class userUpdateDto {
    // @IsEmpty()
    readonly userName : string;
    
    // @IsEmpty()
    // @MinLength(8,{message: "La contraseña debe ser mayor a 8 caracteres"})
    readonly password : string;
    
    // @IsEmpty()
    readonly rol : string;
    
    // @IsEmpty()
    readonly estado : number;
    
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
}