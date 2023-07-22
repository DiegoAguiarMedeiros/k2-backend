import { Injectable } from '@nestjs/common';
import { OmdbapiService } from '../omdbapi/omdbapi.service';

@Injectable()
export class MoviesService {
  constructor(private readonly omdbapiService: OmdbapiService) {}
  private movies: string[] = ['Movie 1', 'Movie 2', 'Movie 3'];

  getMovies(): any {
    return this.omdbapiService.getMovies('matrix');
  }
}
