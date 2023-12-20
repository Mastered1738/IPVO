import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotIndexedModule } from './not-indexed/not-indexed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexedModule } from './indexed/indexed.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Vinko:Vinko_324@ipvo-2.7yubzzt.mongodb.net/sample_mflix?retryWrites=true&w=majority',
      {
        connectionName: 'indexedDB',
      },
    ),
    MongooseModule.forRoot(
      'mongodb+srv://Vinko:Vinko_324@ipvo-1.owrz1um.mongodb.net/sample_mflix?retryWrites=true&w=majority',
      {
        connectionName: 'notindexedDB',
      },
    ),
    IndexedModule,
    NotIndexedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
