import { AppService } from './app.service';
import { Trees } from './entities/tree.entity';
import { Repository } from 'typeorm';
import { treeDTO } from './dto/tree.dto';
export declare class AppController {
    private readonly appService;
    private treesTable;
    constructor(appService: AppService, treesTable: Repository<Trees>);
    fillDataBase(): Promise<void>;
    getAllTreesVarieties(): Promise<{
        result: string[];
    }>;
    getInfoSpecificTree(treeDTO: treeDTO): Promise<any[]>;
    getTreeNbr(treeDTO: treeDTO): Promise<number>;
}
