import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) {
    }
    @Get()
    async fetchAllUsers(): Promise<User[]> {
        return this.userservice.fetchAllUsers();
    }

    @Get(":id")
    async getUser(@Param("id") id:Number): Promise<User|null> {
        return this.userservice.getUser(id);
    }

    @Post()
    async createUser(@Body() data: User): Promise<User> {
        return this.userservice.createUser(data);
    }

    @Put(":id")
    async updateUser(@Param("id") id:Number, @Body() data:User): Promise<User|null> {
        return this.userservice.updateUser(id,data.email,data.name);
    }
}
