// nest.js 어플리케이션 최상위 모듈파일
import { Module } from '@nestjs/common'; // 라이브러리 import
import { AppController } from './app.controller'; // app.controller.ts 파일로부터 import
import { AppService } from './app.service'; // app.service.ts 파일로부터 import
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/Users';
import { Posts } from './user/Posts';
import *as ormconfig from './user/ormconfig';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    Users,
    Posts,
    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
