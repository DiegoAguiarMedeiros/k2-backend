import { Injectable } from '@nestjs/common';
import { DataService } from '../data/data.service';

@Injectable()
export class MoviesService {
  constructor(private readonly dataService: DataService) {}
  private movies: string[] = ['Movie 1', 'Movie 2', 'Movie 3'];

  getMovies(): any {
    return this.dataService.getMovies('matrix');
  }
}
