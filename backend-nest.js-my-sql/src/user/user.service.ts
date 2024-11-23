import { NotFoundException, Injectable, UnauthorizedException } from '@nestjs/common'; // 프리즈마 서비스를 찾아옴.
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';
import { Users } from './Users';

// id, email, name 있음 _ 11.16 age, password 추가됨
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository : Repository<Users>,
        private prismaService: PrismaService
    ) {}

    // 전체 가져오기
    async fetchAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }
    // 사용자 찾기
    async getUser(id: Number): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {id: Number(id)}
        });
    }
    // 사용자 만들기
    async createUser(data: User, email:string): Promise<User> {
        const EmailCheck = await this.usersRepository.findOne({
            where: { email },
        });
        if (EmailCheck) { // 이 예외가 뜨면 걍 서버가 꺼짐 왜 그런지 모름.
            throw new NotFoundException(`이메일이 발견되지 않았습니다`);
        }
        else {
            return this.prismaService.user.create({data: data});
        }
    }
    // 수정하기
    async updateUser(id:Number, email:string, name:string,  password:string): Promise<User | null> {
        return this.prismaService.user.update({
            where: {id:Number(id)},
            data: {
                email : email,
                name : name,
                password : password
            }
        });
    }
    // 삭제하기
    async deleteUser(id: Number): Promise<User | null> {
        return this.prismaService.user.delete({
            where: {id: Number(id)}
        });
    } 
}
