import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';
import { AuthController } from './auth/auth.controller';
import { FreeController } from './free/free.controller';
import { FreeService } from './free/free.service';
import { AuthService } from './auth/auth.service';
import { NotiService } from './noti/noti.service';
import { NotiController } from './noti/noti.controller';
import { KakaoAuthService } from './auth/kakao-auth.service';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
import { JwtService } from './auth/jwt/jwt.service';
import { AuthCheckMiddleware } from './middleware/AuthCheckMiddleware';

@Module({
  imports: [],
  controllers: [AppController, FreeController, AuthController, NotiController, MemberController],
  providers: [Querybuilder, FreeService, AuthService, NotiService, KakaoAuthService, MemberService, JwtService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthCheckMiddleware).forRoutes(MemberController);
  }
}
