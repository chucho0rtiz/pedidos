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

export class direccionCrearDto {
  @IsNotEmpty({ message: "la direccion es requerida" })
  @ApiProperty()
  readonly direccion: string;
}
