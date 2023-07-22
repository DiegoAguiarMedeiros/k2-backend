import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class OmdbapiService {
  constructor(private readonly httpService: HttpService) {}

  async getMovies(movie: string): Promise<any> {
    console.log('aqui');
    const response = await this.httpService
      .get(`${process.env.API_HOST}?apikey=${process.env.API_KEY}&t=${movie}`)
      .toPromise();
    console.log('response', response);
    return response.data;
  }
}
