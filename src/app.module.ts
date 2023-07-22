import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { OmdbapiService } from './omdbapi/omdbapi.service';
import { HttpModule } from '@nestjs/axios';
import { OmdbapiController } from './omdbapi/omdbapi.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MoviesController, OmdbapiController],
  providers: [AppService, MoviesService, OmdbapiService],
})
export class AppModule {}
