import { Module } from '@nestjs/common';
import { OmdbapiController } from './omdbapi.controller';

@Module({
  controllers: [OmdbapiController],
})
export class OmdbapiModule {}
