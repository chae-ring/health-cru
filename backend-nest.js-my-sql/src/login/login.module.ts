import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/user//Users';
import { PrismaService } from 'src/user/prisma.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    // session을 사용하지 않을 예정이기 때문에 false
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // jwt 생성할 때 사용할 시크릿 키와 만료일자 적어주기
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy,PrismaService]
})
export class LoginModule {}
