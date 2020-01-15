import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsInt,
  Min,
  Max,
  MaxLength,
  ValidateIf,
  IsDefined,
  validate
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class userCrearDto {
  @IsNotEmpty({ message: "El userName es requerido" })
  @ApiProperty()
  readonly userName: string;

  @IsNotEmpty({ message: "La contraseña es requerido" })
  @MinLength(8, { message: "La contraseña debe ser mayor a 8 caracteres" })
  @ApiProperty()
  readonly password: string;

  // @IsNotEmpty({message: "El rol es requerido"})
  @ApiProperty({ enum: ["Admin", "Cliente", "Driver"] })
  readonly rol: string;

  // @IsNotEmpty({message: "El estado es requerido"})
  @ApiProperty()
  readonly estado: number;
}
