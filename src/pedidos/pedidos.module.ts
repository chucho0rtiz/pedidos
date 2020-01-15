import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pedidos } from 'src/entitys/pedidos.entity';
import { PedidoController } from './controller/pedido.controller';
import { pedidoService } from './service/pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([pedidos])],
  controllers: [PedidoController],
  providers: [pedidoService]
})
export class PedidosModule {}
