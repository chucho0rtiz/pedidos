import { Injectable } from "@nestjs/common";
import { userModel } from "../model/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { users } from "../../entitys/users.entity";
import { Repository } from "typeorm";
import { userCrearDto } from "../dto/user-crear.dto";
import { userUpdateDto } from "../dto/user-update.dto";

@Injectable()
export class userService {
  constructor(
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>
  ) {}

  async guardar(userCrearDto: userCrearDto) {
    await this.usersRepository.save(userCrearDto);
    return userCrearDto;
  }

  async listar(): Promise<users[]> {
    return await this.usersRepository.find();
  }

  async buscar(id: number) {
    let data = await this.usersRepository.findOne(id);
    if (data == null) {
      return { ok: true, message: "el usuario no se encontro" };
    }
    return { ok: true, message: "el usuario se encontro con exito", data };
  }

  async modificar(id: number, userUpdateDto: userUpdateDto) {
    await this.usersRepository.update(id, userUpdateDto);
    return { ok: true, message: "el usuario se actualizo con exito" };
  }

  async eliminar(id: number) {
    await this.usersRepository.delete(id);
  }
}
