import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from './Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {
}