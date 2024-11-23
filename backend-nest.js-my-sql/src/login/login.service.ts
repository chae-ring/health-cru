import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from 'src/user/prisma.service';
import { Users } from 'src/user//Users';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    constructor(
      @InjectRepository(Users)
      private usersRepository : Repository<Users>,

      private jwtService: JwtService,
      private readonly prismaService: PrismaService,
    ) {}

    async LogIn(email: string, password: string){
      const Checking_IdPassword = await this.prismaService.user.findUnique({
        where: {email, password},
      });
      if (Checking_IdPassword) {
        const payload = { email: email, sub: '0' };
        return this.jwtService.sign(payload);
      }
      else {
        throw new UnauthorizedException('아이디나 비밀번호가 일치하지 않습니다.');
      }      
    }
}
