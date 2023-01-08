import { Injectable } from '@nestjs/common';

import { PrismaService } from '../Prisma.service';
import { ProposesRepository } from '@domain/proposes/repositories/ProposesRepository';

@Injectable()
export class PrismaProposesRepository implements ProposesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(): Promise<void> {
    console.log(this.prismaService);
  }
}
