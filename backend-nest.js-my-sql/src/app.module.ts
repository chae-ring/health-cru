// nest.js 어플리케이션 최상위 모듈파일
import { Module } from '@nestjs/common'; // 라이브러리 import
import { AppController } from './app.controller'; // app.controller.ts 파일로부터 import
import { AppService } from './app.service'; // app.service.ts 파일로부터 import

import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import *as ormconfig from './user/ormconfig';

import { Users } from './user/Users';
import { Posts } from './user/Posts';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './user/prisma.service';
import { LoginModule } from './login/login.module';

// 퍼블릭 ip 주소 13.209.24.64

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    Users,
    Posts,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users]),
    UserModule,
    LoginModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
