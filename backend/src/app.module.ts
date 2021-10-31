import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';
import { BoardService } from './board/board.service';
import { BoardController } from './board/board.controller';
import { AuthController } from './auth/auth.controller';
import { FreeController } from './free/free.controller';
import { FreeService } from './free/free.service';

@Module({
  imports: [],
  controllers: [AppController, BoardController, FreeController, AuthController],
  providers: [Querybuilder, BoardService, FreeService],
})
export class AppModule {}
