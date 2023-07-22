import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getMovie(movie: string): Promise<any> {
    return this.dataService.getMovies(movie);
  }
}
