import { Injectable } from '@nestjs/common'; // 프리즈마 서비스를 찾아옴.
import { PrismaService } from './prisma.service'
import { User } from '@prisma/client'

// id, email, name 있음
@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

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
    async updateUser(id:Number, email:string, name:string): Promise<User | null> {
        return this.prismaService.user.update({
            where: {id:Number(id)},
            data: {
                email : email,
                name : name
            }
        });
    }
}
