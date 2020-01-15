import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { userService } from './service/User.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from '../entitys/users.entity';
import { personas } from 'src/entitys/personas.entity';
import { personaService } from './service/persona.service';

@Module({
  imports: [TypeOrmModule.forFeature([users, personas])],
  controllers: [UserController],
  providers: [userService, personaService]
})
export class UsersModule {}
