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
exports.NacionalityController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_nacionality_dto_1 = require("./dto/create-nacionality.dto");
const nacionality_service_1 = require("./nacionality.service");
const update_nacionality_dto_1 = require("./dto/update-nacionality.dto");
let NacionalityController = class NacionalityController {
    constructor(nacionalitiesService) {
        this.nacionalitiesService = nacionalitiesService;
    }
    getNacionalities() {
        return this.nacionalitiesService.getNacionalities();
    }
    createNacionality(newNacionality) {
        return this.nacionalitiesService.createNacionality(newNacionality);
    }
    createNacionalities(newNationalities) {
        return this.nacionalitiesService.createNacionalities(newNationalities);
    }
    getNacionality(id) {
        return this.nacionalitiesService.getNacionality(id);
    }
    deleteNacionality(id) {
        return this.nacionalitiesService.deleteNacionality(id);
    }
    updateNacionality(id, nacionality) {
        return this.nacionalitiesService.updateNacionality(id, nacionality);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "getNacionalities", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nacionality_dto_1.CreateNacionalityDto]),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "createNacionality", null);
__decorate([
    (0, common_1.Post)('creates'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "createNacionalities", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "getNacionality", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "deleteNacionality", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_nacionality_dto_1.UpdateNacionalityDto]),
    __metadata("design:returntype", void 0)
], NacionalityController.prototype, "updateNacionality", null);
NacionalityController = __decorate([
    (0, common_1.Controller)('nacionality'),
    __metadata("design:paramtypes", [nacionality_service_1.NacionalityService])
], NacionalityController);
exports.NacionalityController = NacionalityController;
//# sourceMappingURL=nacionality.controller.js.map