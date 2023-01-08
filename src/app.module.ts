import { Module } from '@nestjs/common';

import { DatabaseModule } from './app/infra/database/Database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
