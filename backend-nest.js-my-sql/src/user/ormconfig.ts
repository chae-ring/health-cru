// Nest.js 프로젝트와 TypeORM+MySql 연결
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Posts } from './Posts';
import { Users } from './Users';
import *as dotenv from 'dotenv';

dotenv.config();
const config:TypeOrmModuleOptions = {
    type:'mysql', // 어떤 DB인가
    host:'127.0.0.1', // DB host
    port:3306, // DB port
    username:'root',
    password:'sangtae1@',
    database:'sample_db',
    entities:[ // 만들 테이블
        Users,
        Posts
    ],
    synchronize : true, // 한번 true한 뒤로는 무조건 false
    autoLoadEntities:true, // 테이블 자동 로드
    charset:'utf8mb4',
    logging:true, 
    keepConnectionAlive:true,
}

export = config;