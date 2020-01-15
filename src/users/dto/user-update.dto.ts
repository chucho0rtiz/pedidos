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
}