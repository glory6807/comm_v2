import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';
import { BoardService } from './board/board.service';
import { BoardController } from './board/board.controller';
import { AuthController } from './auth/auth.controller';
import { FreeController } from './free/free.controller';
import { FreeService } from './free/free.service';
import { AuthService } from './auth/auth.service';
import { NotiService } from './noti/noti.service';
import { NotiController } from './noti/noti.controller';
import { KakaoAuthService } from './auth/kakao-auth.service';

@Module({
  imports: [],
  controllers: [AppController, BoardController, FreeController, AuthController, NotiController],
  providers: [Querybuilder, BoardService, FreeService, AuthService, NotiService, KakaoAuthService],
})
export class AppModule {}
