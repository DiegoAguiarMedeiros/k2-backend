import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { DataService } from './data/data.service';
import { HttpModule } from '@nestjs/axios';
import { DataController } from './data/data.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MoviesController, DataController],
  providers: [AppService, MoviesService, DataService],
})
export class AppModule {}
