import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DataModule } from '../data/data.module';

@Module({
  imports: [DataModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
