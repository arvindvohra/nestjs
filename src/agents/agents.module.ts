import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './agent.model';

@Module({
  imports:[SequelizeModule.forFeature([Agent])],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule {}
