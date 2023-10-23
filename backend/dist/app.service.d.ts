import { Trees } from './entities/tree.entity';
import { Repository } from 'typeorm';
export declare class AppService {
    private readonly treesRepository;
    constructor(treesRepository: Repository<Trees>);
    getHello(): string;
    getElementById(id: number): Promise<Trees>;
    getAllTreesVarieties(): Promise<string[]>;
    getTreeInfo(treeName: string): Promise<any[]>;
    getTreeNbr(treeName: string): Promise<number>;
}
