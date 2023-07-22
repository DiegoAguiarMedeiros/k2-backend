import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies: string[] = ['Movie 1', 'Movie 2', 'Movie 3'];

  getMovies(): string[] {
    return this.movies;
  }
}
