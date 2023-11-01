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
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const language_entity_1 = require("./entities/language.entity");
let LanguageService = class LanguageService {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    async createLanguage(language) {
        const languageFound = await this.languageRepository.findOne({
            where: {
                name: language_entity_1.Language.name
            }
        });
        if (languageFound) {
            return new common_1.HttpException('Language already exists', common_1.HttpStatus.CONFLICT);
        }
        const newLanguage = this.languageRepository.create(language);
        return { message: 'succes', data: await this.languageRepository.save(newLanguage) };
    }
    async createLanguages(languages) {
        const createdLanguages = [];
        for (const language of languages) {
            const languageFound = await this.languageRepository.findOne({
                where: {
                    name: language.name,
                },
            });
            if (!languageFound) {
                const newLanguage = this.languageRepository.create(language);
                await this.languageRepository.save(newLanguage);
                createdLanguages.push(newLanguage);
            }
        }
        return { message: 'success', data: createdLanguages };
    }
    async getLanguages() {
        return { message: 'succes', data: await this.languageRepository.find() };
    }
    async getLanguage(id) {
        const languageFound = await this.languageRepository.findOne({ where: { id } });
        if (!languageFound) {
            return new common_1.HttpException('Language not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes', data: languageFound };
    }
    async deleteLanguage(id) {
        const result = await this.languageRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException('Language not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'succes' };
    }
    async updateLanguage(id, language) {
        const languageFound = await this.languageRepository.findOne({ where: { id } });
        if (!languageFound) {
            return new common_1.HttpException('Language not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateLanguage = Object.assign(languageFound, language);
        return { message: 'succes', data: await this.languageRepository.save(updateLanguage) };
    }
};
LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(language_entity_1.Language)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LanguageService);
exports.LanguageService = LanguageService;
//# sourceMappingURL=language.service.js.map