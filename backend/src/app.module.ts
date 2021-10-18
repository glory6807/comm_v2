import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { Querybuilder } from './querybuilder/querybuilder';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Querybuilder],
})
export class AppModule {}
