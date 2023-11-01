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
exports.InappropriateContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inappropriate_content_entity_1 = require("./entities/inappropriate-content.entity");
let InappropriateContentService = class InappropriateContentService {
    constructor(inappropriateContentRepository) {
        this.inappropriateContentRepository = inappropriateContentRepository;
    }
    async createInappropriateContent(inappropriateContent) {
        const inappropriateContentFound = await this.inappropriateContentRepository.findOne({
            where: {
                name: inappropriateContent.name
            }
        });
        if (inappropriateContentFound) {
            return new common_1.HttpException('Inappropriate Content already exists', common_1.HttpStatus.CONFLICT);
        }
        const newInappropriateContent = this.inappropriateContentRepository.create(inappropriateContent);
        return { message: 'success', data: await this.inappropriateContentRepository.save(newInappropriateContent) };
    }
    async getInappropriateContents() {
        return { message: 'success', data: await this.inappropriateContentRepository.find() };
    }
    async getInappropriateContent(id) {
        const inappropriateContentFound = await this.inappropriateContentRepository.findOne({ where: { id } });
        if (!inappropriateContentFound) {
            return new common_1.HttpException('Inappropriate Content not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'success', data: inappropriateContentFound };
    }
    async deleteInappropriateContent(id) {
        const result = await this.inappropriateContentRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException('Inappropriate Content not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'success' };
    }
    async updateInappropriateContent(id, inappropriateContent) {
        const inappropriateContentFound = await this.inappropriateContentRepository.findOne({ where: { id } });
        if (!inappropriateContentFound) {
            return new common_1.HttpException('Inappropriate Content not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateInappropriateContent = Object.assign(inappropriateContentFound, inappropriateContent);
        return { message: 'success', data: await this.inappropriateContentRepository.save(updateInappropriateContent) };
    }
};
InappropriateContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inappropriate_content_entity_1.InappropriateContent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InappropriateContentService);
exports.InappropriateContentService = InappropriateContentService;
//# sourceMappingURL=inappropriate-content.service.js.map