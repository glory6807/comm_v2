import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';
import { BoardService } from './board/board.service';
import { BoardController } from './board/board.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, BoardController, AuthController],
  providers: [Querybuilder, BoardService],
})
export class AppModule {}
