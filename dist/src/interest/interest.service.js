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
exports.InterestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interest_entity_1 = require("./entities/interest.entity");
const typeorm_2 = require("typeorm");
let InterestService = class InterestService {
    constructor(interestRepository) {
        this.interestRepository = interestRepository;
    }
    async createInterest(interest) {
        const interestFound = await this.interestRepository.findOne({
            where: {
                name: interest.name
            }
        });
        if (interestFound) {
            return new common_1.HttpException('Interest already exists', common_1.HttpStatus.CONFLICT);
        }
        const newInterest = this.interestRepository.create(interest);
        return { message: 'succes', data: await this.interestRepository.save(newInterest) };
    }
    async getInterests() {
        return { message: 'succes', data: await this.interestRepository.find() };
    }
    async getInterest(id) {
        const interestFound = await this.interestRepository.findOne({ where: { id } });
        if (!interestFound) {
            return new common_1.HttpException('Interest not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes', data: interestFound };
    }
    async deleteInterest(id) {
        const result = await this.interestRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException('Interest not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes' };
    }
    async updateInterest(id, interest) {
        const interestFound = await this.interestRepository.findOne({ where: { id } });
        if (!interestFound) {
            return new common_1.HttpException('Interest not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateInterest = Object.assign(interestFound, interest_entity_1.Interest);
        return { message: 'succes', data: await this.interestRepository.save(updateInterest) };
    }
};
InterestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(interest_entity_1.Interest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InterestService);
exports.InterestService = InterestService;
//# sourceMappingURL=interest.service.js.map