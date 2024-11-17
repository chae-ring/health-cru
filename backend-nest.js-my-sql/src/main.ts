// 어플리케이션을 실행하는 엔트리 파일 

// nest start(or npm run start) -> main.ts 실행 -> app.module.ts 등록
import { NestFactory } from '@nestjs/core'; // 라이브러리 import
import { AppModule } from './app.module'; // app.module.ts 파일로부터 import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000); // 서버 실행
}
bootstrap();
