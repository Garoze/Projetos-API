import { Injectable } from '@nestjs/common';

import { ProposesRepository } from '@domain/proposes/repositories/ProposesRepository';

@Injectable()
export class CreatePropose {
  constructor(private proposesRepository: ProposesRepository) {}

  async execute() {
    console.log(this.proposesRepository);
  }
}
