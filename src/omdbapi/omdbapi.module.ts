import { Module } from '@nestjs/common';
import { DataController } from './omdbapi.controller';

@Module({
  controllers: [DataController],
})
export class DataModule {}
