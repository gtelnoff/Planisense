import { Body, Post, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Trees} from './entities/tree.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { treeDTO } from './dto/tree.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  @InjectRepository(Trees)
  private treesTable: Repository<Trees>,) {}

  @Get()
  async fillDataBase() 
  {
    const query = `COPY Trees FROM '/app/trees.csv' DELIMITER ';' CSV HEADER;`;

    try {
      await Trees.query(query);
      console.log("IT'S GOOD");
    } catch (error) {
      console.log("IT'S BAD");
    }
  }

  @Get('getAllTreesVarieties')
  async getAllTreesVarieties()
  {
    const result = await this.appService.getAllTreesVarieties();
    console.table(result)
    return {result};
  }

  @Post('getTreeInfo')
  async getInfoSpecificTree(@Body() treeDTO: treeDTO)
  {
    console.log(treeDTO);
    const result = await this.appService.getTreeInfo(treeDTO.treeName);
    return (result);
  }

  @Post('getTreeNbr')
  async getTreeNbr(@Body() treeDTO: treeDTO)
  {
    const result = await this.appService.getTreeNbr(treeDTO.treeName);
    return (result);
  }
  
  
}
