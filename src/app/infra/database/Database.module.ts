import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/Prisma.service';

import { ProposesRepository } from '@domain/proposes/repositories/ProposesRepository';
import { PrismaProposesRepository } from './prisma/repositories/PrismaProposesRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProposesRepository,
      useClass: PrismaProposesRepository,
    },
  ],
  exports: [ProposesRepository],
})
export class DatabaseModule {}
