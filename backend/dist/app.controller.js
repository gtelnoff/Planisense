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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const tree_entity_1 = require("./entities/tree.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tree_dto_1 = require("./dto/tree.dto");
let AppController = class AppController {
    constructor(appService, treesTable) {
        this.appService = appService;
        this.treesTable = treesTable;
    }
    async fillDataBase() {
        const query = `COPY Trees FROM '/app/trees.csv' DELIMITER ';' CSV HEADER;`;
        try {
            await tree_entity_1.Trees.query(query);
            console.log("IT'S GOOD");
        }
        catch (error) {
            console.log("IT'S BAD");
        }
    }
    async getAllTreesVarieties() {
        const result = await this.appService.getAllTreesVarieties();
        console.table(result);
        return { result };
    }
    async getInfoSpecificTree(treeDTO) {
        console.log(treeDTO);
        const result = await this.appService.getTreeInfo(treeDTO.treeName);
        return (result);
    }
    async getTreeNbr(treeDTO) {
        const result = await this.appService.getTreeNbr(treeDTO.treeName);
        return (result);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "fillDataBase", null);
__decorate([
    (0, common_1.Get)('getAllTreesVarieties'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllTreesVarieties", null);
__decorate([
    (0, common_1.Post)('getTreeInfo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tree_dto_1.treeDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInfoSpecificTree", null);
__decorate([
    (0, common_1.Post)('getTreeNbr'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tree_dto_1.treeDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTreeNbr", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, typeorm_1.InjectRepository)(tree_entity_1.Trees)),
    __metadata("design:paramtypes", [app_service_1.AppService,
        typeorm_2.Repository])
], AppController);
//# sourceMappingURL=app.controller.js.map