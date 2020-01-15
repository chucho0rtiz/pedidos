import { Injectable } from "@nestjs/common";
import { userModel } from "../model/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { personaCrearDto } from "../dto/persona-crear.dto";
import { personas } from "src/entitys/personas.entity";
import { personaUpdateDto } from "../dto/persona-update.dto";

@Injectable()
export class personaService {

    constructor(
        @InjectRepository(personas)
        private readonly personaRepository : Repository<personas>
    ){}

    async guardar(personaCrearDto : personaCrearDto) {
        await this.personaRepository.save(personaCrearDto);
        return personaCrearDto;
    }

    async listar() :  Promise<personas[]>{
        return await this.personaRepository.find();
    }

    async buscar(id : number){
        let data = await this.personaRepository.findOne(id);
        if (data == null) {
            return {ok:true, message:'el usuario no se encontro'}
        }
        return {ok:true, message:'el usuario se encontro con exito', data}
    }

    async modificar(id: number, personaUpdateDto :  personaUpdateDto){
        await this.personaRepository.update(id, personaUpdateDto)
        return {ok:true, message:'el usuario se actualizo con exito'}
    }

}