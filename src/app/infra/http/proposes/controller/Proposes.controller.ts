import { Controller, Post } from '@nestjs/common';

import { CreatePropose } from '../services/createPropose/CreatePropose.service';

@Controller('/proposes')
export class ProposesController {
  constructor(private createPropose: CreatePropose) {}

  @Post()
  async create() {
    await this.createPropose.execute();
  }
}
