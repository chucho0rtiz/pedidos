import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { userService } from "./service/User.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { users } from "../entitys/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [UserController],
  providers: [userService]
})
export class UsersModule {}
