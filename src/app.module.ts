import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './agents/agent.model';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres@123',
      database: 'commission',
      models: [Agent],
      autoLoadModels: true,
      synchronize: true,
    }),
    AgentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
