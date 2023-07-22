import { Injectable } from '@nestjs/common';
import { OmdbapiService } from '../omdbapi/omdbapi.service';
import { MovieDTO } from './dto/movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly omdbapiService: OmdbapiService) {}

  getMovies(movie: string): Promise<MovieDTO> {
    return this.omdbapiService.getMovies(movie);
  }
}
