import { Controller, Get, Post } from '@nestjs/common';
import { NotIndexedService } from './not-indexed.service';
import { Movie } from 'src/not-indexed/movies.model';

@Controller('not-indexed')
export class NotIndexedController {
  constructor(private readonly notIndexedService: NotIndexedService) {}

  @Get('/getAll')
  async getAll(): Promise<Movie[]> {
    return this.notIndexedService.getAllMovies();
  }

  @Post('/getMovieByTitle')
  async getMovieByTitle(): Promise<Movie[]> {
    const title: string = 'The Helen Morgan Story';
    return this.notIndexedService.getMovieByTitle(title);
  }

  @Get('/getMovieByNominations')
  async getMovieByNominations(): Promise<Movie[]> {
    return this.notIndexedService.getMovieByNominations();
  }

  @Get('/getMoviesAboveACertainYear')
  async getMoviesAboveACertainYear(): Promise<Movie[]> {
    return this.notIndexedService.getMoviesAboveACertainYear();
  }
}
