/* eslint-disable prettier/prettier */
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
  ) { }

  async getAllMovies(): Promise<Movie[]> {
    const performance = executionTime();
    performance.start();
    const movies = await this.movieModel.find();
    const results = performance.stop();
    console.log(
      'Time to get NOT indexed movies in miliseconds: ',
      results.time,
    );
    return movies;
  }

  async getMovieByTitle(title: string): Promise<Movie[]> {
    const performance = executionTime();
    performance.start();
    const movies = await this.movieModel.find({ title: title });
    const results = performance.stop();
    console.log(
      'Time to get NOT indexed (by title) movies in miliseconds: ',
      results.time,
    );
    return movies;
  }

  async getMovieByNominations(): Promise<Movie[]> {
    const performance = executionTime();
    performance.start();
    const movies = await this.movieModel
      .find({
        'awards.nominations': {
          $gt: 1,
        },
      })
    const results = performance.stop();
    console.log(
      'Time to get NOT indexed (by nominations) movies in miliseconds: ',
      results.time,
    );
    return movies;
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
      'Time to get NOT indexed (by year) movies in miliseconds: ',
      results.time,
    );
    return movies;
  }
}
