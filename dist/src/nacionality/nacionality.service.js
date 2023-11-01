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
exports.NacionalityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nacionality_entity_1 = require("./entities/nacionality.entity");
const typeorm_2 = require("typeorm");
let NacionalityService = class NacionalityService {
    constructor(nacionalityRepository) {
        this.nacionalityRepository = nacionalityRepository;
    }
    async createNacionality(nacionality) {
        const nacionalityFound = await this.nacionalityRepository.findOne({
            where: {
                name: nacionality.name
            }
        });
        if (nacionalityFound) {
            return new common_1.HttpException('Nacionality already exists', common_1.HttpStatus.CONFLICT);
        }
        const newNacionality = this.nacionalityRepository.create(nacionality);
        return { message: 'succes', data: await this.nacionalityRepository.save(newNacionality) };
    }
    async createNacionalities(nacionalities) {
        const createdNacionalities = [];
        for (const nacionality of nacionalities) {
            const nacionalityFound = await this.nacionalityRepository.findOne({
                where: {
                    name: nacionality.name,
                },
            });
            if (!nacionalityFound) {
                const newNacionality = this.nacionalityRepository.create(nacionality);
                await this.nacionalityRepository.save(newNacionality);
                createdNacionalities.push(newNacionality);
            }
        }
        return { message: 'success', data: createdNacionalities };
    }
    async getNacionalities() {
        return { message: 'succes', data: await this.nacionalityRepository.find() };
    }
    async getNacionality(id) {
        const nacionalityFound = await this.nacionalityRepository.findOne({ where: { id } });
        if (!nacionalityFound) {
            return new common_1.HttpException('Nacionality not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes', data: nacionalityFound };
    }
    async deleteNacionality(id) {
        const result = await this.nacionalityRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException('Nacionality not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes' };
    }
    async updateNacionality(id, nacionality) {
        const nacionalityFound = await this.nacionalityRepository.findOne({ where: { id } });
        if (!nacionalityFound) {
            return new common_1.HttpException('Nacionality not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateNacionality = Object.assign(nacionalityFound, nacionality);
        return { message: 'succes', data: await this.nacionalityRepository.save(updateNacionality) };
    }
};
NacionalityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nacionality_entity_1.Nacionality)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NacionalityService);
exports.NacionalityService = NacionalityService;
//# sourceMappingURL=nacionality.service.js.map