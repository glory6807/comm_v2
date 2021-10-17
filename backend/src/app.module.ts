import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: ,
      username: '',
      password: '',
      database: '',
      entities: [],
      synchronize: true,
    }), MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
