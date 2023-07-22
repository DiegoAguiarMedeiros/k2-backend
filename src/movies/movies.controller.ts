import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDTO } from './dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/:movie')
  getMovies(@Param('movie') movie: string): Promise<MovieDTO> {
    return this.moviesService.getMovies(movie);
  }
}
