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

export class tareaCrearDto {
  @IsNotEmpty({ message: "El user id es requerido" })
  @ApiProperty()
  readonly userId: number;

  @IsNotEmpty({ message: "El pedido id es requerido" })
  @ApiProperty()
  readonly pedidoId: number;
  // @IsNotEmpty({message: "El estado es requerido"})
  @ApiProperty()
  readonly estado: number;
}
