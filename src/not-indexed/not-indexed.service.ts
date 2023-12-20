import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from 'src/not-indexed/movies.model';
import * as executionTime from 'execution-time';

@Injectable()
export class NotIndexedService {
  constructor(
    @InjectModel(Movie.name, 'notindexedDB')
    private readonly movieModel: Model<Movie>,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieModel.find();
  }

  async getMovieByTitle(title: string): Promise<Movie[]> {
    return await this.movieModel.find({ title: title });
  }

  async getMovieByNominations(): Promise<Movie[]> {
    return await this.movieModel.find({
      'awards.nominations': {
        $gt: 1,
      },
    });
  }

  async getMoviesAboveACertainYear(): Promise<Movie[]> {
    const performance = executionTime();
    performance.start();
    const movies = await this.movieModel.find({
      year: {
        $gt: 1940,
      },
    });
    const results = performance.stop();
    console.log(
      'Time to get not indexed movies in miliseconds: ',
      results.time,
    );
    return movies;
  }
}
