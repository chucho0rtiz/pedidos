import { Injectable } from "@nestjs/common";
import { tareaModel } from "../model/tarea.model";
import { InjectRepository } from "@nestjs/typeorm";
import { tareas } from "../../entitys/tareas.entity";
import { Repository } from "typeorm";
// import { tareaCrearDto } from "../dto/tarea-crear.dto";
import { tareaUpdateDto } from "../dto/tarea-update.dto";
import { tareaCrearDto } from "../dto/tarea-crear.dto";

@Injectable()
export class tareaService {
  constructor(
    @InjectRepository(tareas)
    private readonly tareasRepository: Repository<tareas>
  ) {}

  async guardar(tareaCrearDto: tareaCrearDto) {
    await this.tareasRepository.save(tareaCrearDto);
    return tareaCrearDto;
  }

  async listar(): Promise<tareas[]> {
    return await this.tareasRepository.find();
  }

  async buscar(id: number) {
    let data = await this.tareasRepository.findOne(id);
    if (data == null) {
      return { ok: true, message: "el usuario no se encontro" };
    }
    return { ok: true, message: "el usuario se encontro con exito", data };
  }

  async modificar(id: number, tareaUpdateDto: tareaUpdateDto) {
    await this.tareasRepository.update(id, tareaUpdateDto);
    return { ok: true, message: "el usuario se actualizo con exito" };
  }

  async eliminar(id: number) {
    await this.tareasRepository.delete(id);
  }
}
