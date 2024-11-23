import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('all')
    getAllUser() {
        return {
            success: true,
            user: {
                email:'로그인 완성했다데스.',
            }
        }
    }

    @Get() // 사용자 전체 목록 가져오기
    async fetchAllUsers(): Promise<User[]> {
        return this.userservice.fetchAllUsers();
    }

    @Get(":id") // 사용자 찾기
    async getUser(@Param("id") id:Number): Promise<User|null> {
        return this.userservice.getUser(id);
    }

    @Post() // 새 사용자 만들기 
    async createUser(@Body() data: User): Promise<User> {
        return this.userservice.createUser(data,data.email);
    }

    @Put(":id") // 사용자 계정 내용 변경
    async updateUser(
        @Param("id") id:Number, 
        @Body() data:User): Promise<User|null> {
        return this.userservice.updateUser(id,data.email,data.name,data.password);
    }

    @Delete(":id") // 사용자 계정 삭제
    async deleteUser(@Param("id") id:Number): Promise<User|null> {
        return this.userservice.deleteUser(id);
    }
}
