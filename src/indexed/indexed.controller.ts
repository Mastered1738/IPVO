import { Controller } from '@nestjs/common';
import { IndexedService } from './indexed.service';

@Controller('indexed-controller')
export class IndexedController {
  constructor(private readonly indexedService: IndexedService) {}

  //async getAll(): Promise<any[]> {}
}
