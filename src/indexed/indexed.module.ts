import { Module } from '@nestjs/common';
import { IndexedController } from './indexed.controller';
import { IndexedService } from './indexed.service';

@Module({
  imports: [],
  controllers: [IndexedController],
  providers: [IndexedService],
})
export class IndexedModule {}
