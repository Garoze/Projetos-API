import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/Database.module';

import { ProposesController } from './controller/Proposes.controller';

import { CreatePropose } from './services/createPropose/CreatePropose.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProposesController],
  providers: [CreatePropose],
})
export class ProposesModule {}
