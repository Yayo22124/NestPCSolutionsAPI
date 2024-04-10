import { Module } from '@nestjs/common';
import { mongooseProviders } from './providers/mongo/mongo.provider';

@Module({
  providers: [...mongooseProviders],
  exports: [...mongooseProviders],
})
export class DatabaseModule {}
