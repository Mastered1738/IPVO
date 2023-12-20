import { Module } from '@nestjs/common';
import { NotIndexedController } from './not-indexed.controller';
import { NotIndexedService } from './not-indexed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from 'src/not-indexed/movies.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Movie.name, schema: MovieSchema, collection: 'movies' }],
      'notindexedDB',
    ),
  ],
  controllers: [NotIndexedController],
  providers: [NotIndexedService],
})
export class NotIndexedModule {}
