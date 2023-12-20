import { Controller, Get, Post } from '@nestjs/common';
import { IndexedService } from './indexed.service';
import { Movie } from 'src/indexed/movies.model';

@Controller('indexed')
export class IndexedController {
  constructor(private readonly indexedService: IndexedService) {}

  @Get('/getAll')
  async getAll(): Promise<Movie[]> {
    return this.indexedService.getAllMovies();
  }

  @Post('/getMovieByTitle')
  async getMovieByTitle(): Promise<Movie[]> {
    const title: string = 'The Helen Morgan Story';
    return this.indexedService.getMovieByTitle(title);
  }

  @Get('/getMovieByNominations')
  async getMovieByNominations(): Promise<Movie[]> {
    return this.indexedService.getMovieByNominations();
  }

  @Get('/getMoviesAboveACertainYear')
  async getMoviesAboveACertainYear(): Promise<Movie[]> {
    return this.indexedService.getMoviesAboveACertainYear();
  }
}
