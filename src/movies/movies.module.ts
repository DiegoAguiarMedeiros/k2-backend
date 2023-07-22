import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DataModule } from '../omdbapi/omdbapi.module';

@Module({
  imports: [DataModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
