import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { OmdbapiModule } from '../omdbapi/omdbapi.module';

@Module({
  imports: [OmdbapiModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
