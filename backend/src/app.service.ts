import { Injectable } from '@nestjs/common';
import {Trees} from './entities/tree.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Tree } from 'typeorm';

import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Trees)
  private readonly treesRepository: Repository<Trees>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getElementById(id:number): Promise<Trees>
  {
    return (await this.treesRepository.findOne({ where: { id: id }}))
  }

  async getAllTreesVarieties()
  {
    const trees = await this.treesRepository.find({
      where: { type_emplacement: "Arbre" }
    });
    const sortTrees = trees.map(trees => trees.libelle_francais).sort()
    const allTreesVarieties = [...new Set(sortTrees)];
    return (allTreesVarieties);
  }

  async getTreeInfo(treeName: string)
  {
    const arrondissementsParis: string[] = ["PARIS 1ER ARRDT", "PARIS 2E ARRDT", "PARIS 3E ARRDT", "PARIS 4E ARRDT", "PARIS 5E ARRDT", "PARIS 6E ARRDT", "PARIS 7E ARRDT", "PARIS 8E ARRDT", "PARIS 9E ARRDT", "PARIS 10E ARRDT", "PARIS 11E ARRDT", "PARIS 12E ARRDT", "PARIS 13E ARRDT", "PARIS 14E ARRDT", "PARIS 15E ARRDT", "PARIS 16E ARRDT", "PARIS 17E ARRDT", "PARIS 18E ARRDT", "PARIS 19E ARRDT", "PARIS 20E ARRDT"];
    let treeStat = [];
    let nbrOfTree: number;

    for (let i = 0; i < 20; i++)
    {
       nbrOfTree = await this.treesRepository.count({ where: { libelle_francais: treeName, arrondissement: arrondissementsParis[i] } });
       treeStat.push(nbrOfTree);
    }
    
    console.table(treeStat);
    return (treeStat);
  }

  async getTreeNbr(treeName: string)
  {
    const nbrOfTree = await this.treesRepository.count({ where: { libelle_francais: treeName } });
    
    return (nbrOfTree);
  }
}
