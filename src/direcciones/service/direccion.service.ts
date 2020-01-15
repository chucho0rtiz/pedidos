import { Injectable } from "@nestjs/common";
import { direccionModel } from "../model/direccion.model";
import { InjectRepository } from "@nestjs/typeorm";
import { direcciones } from "../../entitys/direcciones.entity";
import { Repository } from "typeorm";
import { direccionCrearDto } from "../dto/direccion-crear.dto";
import { direccionUpdateDto } from "../dto/direccion-update.dto";

@Injectable()
export class direccionService {
  constructor(
    @InjectRepository(direcciones)
    private readonly direccionesRepository: Repository<direcciones>
  ) {}

  async guardar(direccionCrearDto: direccionCrearDto) {
    await this.direccionesRepository.save(direccionCrearDto);
    return direccionCrearDto;
  }

  async listar(): Promise<direcciones[]> {
    return await this.direccionesRepository.find();
  }

  async buscar(id: number) {
    let data = await this.direccionesRepository.findOne(id);
    if (data == null) {
      return { ok: true, message: "el usuario no se encontro" };
    }
    return { ok: true, message: "el usuario se encontro con exito", data };
  }

  async modificar(id: number, direccionUpdateDto: direccionUpdateDto) {
    await this.direccionesRepository.update(id, direccionUpdateDto);
    return { ok: true, message: "el usuario se actualizo con exito" };
  }

  async eliminar(id: number) {
    await this.direccionesRepository.delete(id);
  }
}
