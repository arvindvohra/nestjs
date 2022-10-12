import { PartialType } from '@nestjs/mapped-types';
import { CreateAgentDto } from './create-agent.dto';

export class UpdateAgentDto extends PartialType(CreateAgentDto) {

    agentid: number;
    agentname: string;
    email: string;
    country: string;
    status : boolean;
}
