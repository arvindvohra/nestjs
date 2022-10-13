import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Agent } from './agent.model';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {

  // inject user repository
constructor(

  @InjectModel(Agent)
  private agentModel : typeof Agent

){}


  /*create(createAgentDto: CreateAgentDto) : Promise<Agent> {

    const agent : any = new Agent();
    agent.agentid = createAgentDto.agentid;
    agent.agentname = createAgentDto.agentname
    agent.email = createAgentDto.email;
    agent.country = createAgentDto.country;
    agent.status = true;

    console.log(agent.agentname);
    
    return this.agentModel.create(agent);
    }*/


  create(agent : any): Promise <Agent>{
    return this.agentModel.create(agent);

  }


  findAll() {
    return this.agentModel.findAll();
  }

  findOne(id: number) {
    return this.agentModel.findOne({ where : {id} });
  }


  /*update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }*/


  update(id: number, updateAgentDto: UpdateAgentDto) {
  
    return this.agentModel.update(
      {
        agentname: updateAgentDto.agentname,
        email : updateAgentDto.email,
        country : updateAgentDto.country,
        updateAt : new Date()
      },
      {
        where: { id }
      }
      
    );  
}


 /* update(id: number, updateAgentDto: UpdateAgentDto) {
  
      let agent : Agent = new Agent();

      agent.agentname = updateAgentDto.agentname;
    agent.email = updateAgentDto.email;

    console.log(agent);

    console.log(id);

      return this.agentModel.update(agent, { where : {id} });
    
  }*/

  async remove(id: number) {

    const agent = await this.findOne(id);
    await agent.destroy();

    return `Agent #${id} details has been removed from database !`;
  }
}
