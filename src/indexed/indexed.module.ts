import { Module } from '@nestjs/common';
import { IndexedController } from './indexed.controller';
import { IndexedService } from './indexed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from 'src/indexed/movies.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Movie.name, schema: MovieSchema, collection: 'movies' }],
      'indexedDB',
    ),
  ],
  controllers: [IndexedController],
  providers: [IndexedService],
})
export class IndexedModule {}
