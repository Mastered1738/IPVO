import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class IndexedService {
  constructor(@InjectConnection('indexedDB') private database: Connection) {}

  //async getAllMovies(): Promise<movies[]> {}
}
