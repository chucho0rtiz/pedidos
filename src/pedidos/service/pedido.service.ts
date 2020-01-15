import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { users } from "../../entitys/users.entity";
import { Repository } from "typeorm";
import { pedidoCrearDto } from "../dto/pedido-crear.dto";
import { pedidoUpdateDto } from "../dto/pedido-update.dto";
import { pedidos } from "src/entitys/pedidos.entity";

@Injectable()
export class pedidoService {

    constructor(
        @InjectRepository(pedidos)
        private readonly pedidoRepository : Repository<pedidos>
    ){}

    async guardar(pedidoCrearDto : pedidoCrearDto) {
        await this.pedidoRepository.save(pedidoCrearDto);
        return pedidoCrearDto;
    }

    async listar() :  Promise<pedidos[]>{
        return await this.pedidoRepository.find();
    }

    async buscar(id : number){
        let data = await this.pedidoRepository.findOne(id);
        console.log(data);
        
        if (data == null) {
            return {ok:true, message:'el usuario no se encontro'}
        }
        return {ok:true, message:'el usuario se encontro con exito', data}
    }

    async modificar(id: number, pedidoUpdateDto :  pedidoUpdateDto){
        await this.pedidoRepository.update(id, pedidoUpdateDto)
        return {ok:true, message:'el usuario se actualizo con exito'}
    }

    async eliminar(id: number){
        await this.pedidoRepository.delete(id)
    }

}