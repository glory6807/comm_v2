import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

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
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';
import { GlobalVariableService } from './global-variable/global-variable.service';
import { UsrSchedulerService } from './schedule/usr-scheduler.service';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AppController, FreeController, AuthController, NotiController, MemberController, MainController],
  providers: [Querybuilder, FreeService, AuthService, NotiService, KakaoAuthService, MemberService, JwtService, MainService, GlobalVariableService, UsrSchedulerService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthCheckMiddleware).forRoutes(MemberController);
  }
}
