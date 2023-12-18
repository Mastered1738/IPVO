import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class NotIndexedService {
  constructor(@InjectConnection('notindexedDB') private database: Connection) {}
}
