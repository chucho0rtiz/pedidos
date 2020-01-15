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

export class tareaUpdateDto {
  // @IsNotEmpty({ message: "El userName es requerido" })
  @ApiProperty()
  readonly userId: number;

  // @IsNotEmpty({ message: "La contraseña es requerido" })
  // @MinLength(8, { message: "La contraseña debe ser mayor a 8 caracteres" })
  @ApiProperty()
  readonly pedidoId: number;
  // @IsNotEmpty({message: "El estado es requerido"})
  @ApiProperty()
  readonly estado: number;
}
