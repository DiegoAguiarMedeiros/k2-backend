import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MovieDTO } from 'src/movies/dto/movie.dto';

@Injectable()
export class OmdbapiService {
  constructor(private readonly httpService: HttpService) {}

  async getMovies(movie: string): Promise<MovieDTO> {
    const response = await this.httpService
      .get(`${process.env.API_HOST}?apikey=${process.env.API_KEY}&t=${movie}`)
      .toPromise();
    return response.data;
  }
}
