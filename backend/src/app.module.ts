import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';
import { MemberService } from './member/member.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Querybuilder, MemberService],
})
export class AppModule {}
