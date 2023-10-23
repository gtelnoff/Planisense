"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const tree_entity_1 = require("./entities/tree.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppService = class AppService {
    constructor(treesRepository) {
        this.treesRepository = treesRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    async getElementById(id) {
        return (await this.treesRepository.findOne({ where: { id: id } }));
    }
    async getAllTreesVarieties() {
        const trees = await this.treesRepository.find({
            where: { type_emplacement: "Arbre" }
        });
        const sortTrees = trees.map(trees => trees.libelle_francais).sort();
        const allTreesVarieties = [...new Set(sortTrees)];
        return (allTreesVarieties);
    }
    async getTreeInfo(treeName) {
        const arrondissementsParis = ["PARIS 1ER ARRDT", "PARIS 2E ARRDT", "PARIS 3E ARRDT", "PARIS 4E ARRDT", "PARIS 5E ARRDT", "PARIS 6E ARRDT", "PARIS 7E ARRDT", "PARIS 8E ARRDT", "PARIS 9E ARRDT", "PARIS 10E ARRDT", "PARIS 11E ARRDT", "PARIS 12E ARRDT", "PARIS 13E ARRDT", "PARIS 14E ARRDT", "PARIS 15E ARRDT", "PARIS 16E ARRDT", "PARIS 17E ARRDT", "PARIS 18E ARRDT", "PARIS 19E ARRDT", "PARIS 20E ARRDT"];
        let treeStat = [];
        let nbrOfTree;
        for (let i = 0; i < 20; i++) {
            nbrOfTree = await this.treesRepository.count({ where: { libelle_francais: treeName, arrondissement: arrondissementsParis[i] } });
            treeStat.push(nbrOfTree);
        }
        console.table(treeStat);
        return (treeStat);
    }
    async getTreeNbr(treeName) {
        const nbrOfTree = await this.treesRepository.count({ where: { libelle_francais: treeName } });
        return (nbrOfTree);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tree_entity_1.Trees)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map