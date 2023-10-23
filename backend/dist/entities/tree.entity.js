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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trees = void 0;
const typeorm_1 = require("typeorm");
let Trees = class Trees extends typeorm_1.BaseEntity {
};
exports.Trees = Trees;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Trees.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "type_emplacement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "domanialite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "arrondissement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "complement_adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "idemplacement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "libelle_francais", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "espece", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "variete_oucultivar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "circonference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "hauteur", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "stade_de_developpement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "remarquable", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: '' }),
    __metadata("design:type", String)
], Trees.prototype, "geo_point_2d", void 0);
exports.Trees = Trees = __decorate([
    (0, typeorm_1.Entity)()
], Trees);
//# sourceMappingURL=tree.entity.js.map