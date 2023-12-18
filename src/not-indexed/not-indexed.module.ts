import { Module } from '@nestjs/common';
import { NotIndexedController } from './not-indexed.controller';
import { NotIndexedService } from './not-indexed.service';

@Module({
  imports: [],
  controllers: [NotIndexedController],
  providers: [NotIndexedService],
})
export class NotIndexedModule {}
