import { Injectable, UnauthorizedException } from '@nestjs/common'; // 프리즈마 서비스를 찾아옴.
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
    /*
    // 11.16) 회원가입 구현 
    async Join(email:string, name:string, age:number, password:string) {
        const newuser = await this.usersRepository.findOne({where:{email}});
        if(newuser){
            throw new UnauthorizedException('이미 존재하는 사용자입니다')
            return;
        }
        else[
            await this.usersRepository.save({
                email,
                name,
                age,
                password
            })
        ]
    } */


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
    async createUser(data: User): Promise<User> {
        return this.prismaService.user.create({data: data});
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
