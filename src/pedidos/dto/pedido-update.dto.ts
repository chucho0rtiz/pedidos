import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsInt,
  Min,
  Max,
  MaxLength,
  ValidateIf,
  IsEmpty
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class pedidoUpdateDto {
  // @IsNotEmpty({message: "La dirección es requerida"})
  @ApiProperty()
  readonly direccion: string;

  // @IsNotEmpty({message: "La fecha de entrega es requerida"})
  @ApiProperty()
  readonly fechaEntrega: string;

  // @IsNotEmpty({message: "La franja horaria 1 es requerida"})
  @ApiProperty()
  readonly franjaHora1: string;

  // @IsNotEmpty({message: "La franja horaria 2 es requerida"})
  @ApiProperty()
  readonly franjaHora2: string;

  // @IsNotEmpty({message: "El nombre es requerido"})
  @ApiProperty()
  readonly nombre: string;

  // @IsNotEmpty({message: "El apellido es requerido"})
  @ApiProperty()
  readonly apellido: string;

  // @IsNotEmpty({message: "El email es requerido"})
  // @IsEmail({},{message: "El email debe tener un formato correcto"})
  @ApiProperty()
  readonly email: string;

  // @Min(1000000, {message:"El telefono debe ser mayor o igual a 7 caracteres"})
  // @IsInt({message: "El telefono debe ser numerico"})
  @ApiProperty()
  readonly telefono: number;

  // @IsNotEmpty({message: "El userId es requerido"})
  @ApiProperty()
  readonly userId: number;
}
