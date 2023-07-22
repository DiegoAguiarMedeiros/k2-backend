import { Controller, Get } from '@nestjs/common';
import { OmdbapiService } from './omdbapi.service';

@Controller('omdbapi')
export class OmdbapiController {
  constructor(private readonly omdbapiService: OmdbapiService) {}

  @Get()
  async getMovie(movie: string): Promise<any> {
    return this.omdbapiService.getMovies(movie);
  }
}
