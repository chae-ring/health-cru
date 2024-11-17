import { Controller, Post, Req } from '@nestjs/common';
import { LoginService } from './login.service';
import { Request } from 'express';

@Controller('login') // localhost:3000/login으로 호출하면 해당 클래스로 요청
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post() // 위 URL로 요청이 왔을 때 GET 메서드일 경우, 해당 메서드 실행
    login(@Req() request: Request) {
        const { email, password } = request.body;
        return this.loginService.login(email, password);
    }
}
