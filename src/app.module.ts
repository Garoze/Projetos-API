import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/Database.module';
import { ProposesModule } from '@infra/http/proposes/Proposes.module';

@Module({
  imports: [DatabaseModule, ProposesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
