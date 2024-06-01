import { Module } from '@nestjs/common';
import { LaboratoriesService } from './laboratories.service';

@Module({
  providers: [LaboratoriesService]
})
export class LaboratoriesModule {}
