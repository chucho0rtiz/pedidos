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

export class userUpdateDto {
  // @IsEmpty()
  @ApiProperty()
  readonly userName: string;

  // @IsEmpty()
  // @MinLength(8,{message: "La contraseña debe ser mayor a 8 caracteres"})
  @ApiProperty()
  readonly password: string;

  // @IsEmpty()
  @ApiProperty({ enum: ["Admin", "Cliente", "Driver"] })
  readonly rol: string;

  // @IsEmpty()
  @ApiProperty()
  readonly estado: number;
}
