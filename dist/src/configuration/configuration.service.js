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
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const language_user_entity_1 = require("./entities/language_user.entity");
const interest_user_entity_1 = require("./entities/interest_user.entity");
const inappropriate_content_user_entity_1 = require("./entities/inappropriate_content_user.entity");
const language_entity_1 = require("../language/entities/language.entity");
const user_entity_1 = require("../users/entities/user.entity");
const nacionality_entity_1 = require("../nacionality/entities/nacionality.entity");
const inappropriate_content_entity_1 = require("../inappropriate-content/entities/inappropriate-content.entity");
const interest_entity_1 = require("../interest/entities/interest.entity");
let ConfigurationService = class ConfigurationService {
    constructor(nacionalityRepository, userRepository, languageRepository, inappropriateContentRepository, interestRepository, languageUserRepository, interestUserRepository, inappropriateContentUserRepository) {
        this.nacionalityRepository = nacionalityRepository;
        this.userRepository = userRepository;
        this.languageRepository = languageRepository;
        this.inappropriateContentRepository = inappropriateContentRepository;
        this.interestRepository = interestRepository;
        this.languageUserRepository = languageUserRepository;
        this.interestUserRepository = interestUserRepository;
        this.inappropriateContentUserRepository = inappropriateContentUserRepository;
    }
    async createSelectLanguageUser(id) {
        const promesaLanguageUser = [];
        const languages = await this.languageRepository.find();
        const languageUserFound = await this.languageUserRepository.find({
            where: { user: { id } }
        });
        if (languageUserFound.length === 0) {
            languages.forEach(async (e) => {
                const newLanguageUser = this.languageUserRepository.create({
                    language: { id: e.id },
                    user: { id: id },
                });
                promesaLanguageUser.push(this.languageUserRepository.save(newLanguageUser));
            });
            await Promise.all(promesaLanguageUser);
            return "se inicializó correctamente";
        }
        else {
            return "ya está creado sus lenguajes para el usuario";
        }
    }
    async updateSelectLanguageUser(id, languageUser) {
        const promesaObtencion = [];
        const languageUserFound = await this.languageUserRepository.find({
            where: {
                status: true,
                user: { id }
            }
        });
        languageUserFound.forEach(async (e) => {
            e.status = false;
            promesaObtencion.push(this.languageUserRepository.save(e));
        });
        await Promise.all(promesaObtencion);
        const promesasDeActualizacion = [];
        languageUser.forEach(async (e) => {
            const registroEncontrado = await this.languageUserRepository.findOne({
                where: { user: { id }, language: { id: e.language_id } },
            });
            if (registroEncontrado) {
                registroEncontrado.status = e.status;
                promesasDeActualizacion.push(this.languageUserRepository.save(registroEncontrado));
            }
        });
        await Promise.all(promesasDeActualizacion);
        return { message: 'success' };
    }
    async getLanguagesUser(id) {
        const userFound = await this.userRepository.findOne({ where: { id } });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const languageUserFound = await this.languageUserRepository.find({
            where: { status: true, user: { id } },
            relations: ['language'],
        });
        return { message: 'success', data: languageUserFound };
    }
    async selectNacionalityUser(id, selectNacionalityUser) {
        const userFound = await this.userRepository.findOne({ where: { id }, relations: ['nacionality'] });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const nacionalityFound = await this.nacionalityRepository.findOne({ where: { id: selectNacionalityUser.nacionality_id } });
        if (!nacionalityFound) {
            return new common_1.HttpException('Nacionalidad no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        userFound.nacionality = nacionalityFound;
        return { message: "success", data: await this.userRepository.save(userFound) };
    }
    async selectMatternLanguage(id, selectNacionalityMatternLanguageUser) {
        const userFound = await this.userRepository.findOne({ where: { id }, relations: ['nacionality'] });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const languageFound = await this.languageRepository.findOne({ where: { id: selectNacionalityMatternLanguageUser.language_id } });
        if (!languageFound) {
            return new common_1.HttpException('Lenguaje no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const languageUserFound = await this.languageUserRepository.findOne({
            where: { matern_language: true, user: { id } },
        });
        languageUserFound.matern_language = false;
        Promise.all([await this.languageUserRepository.save(languageUserFound)]);
        const newMatternLanguageUser = await this.languageUserRepository.findOne({
            where: { user: { id }, language: { id: selectNacionalityMatternLanguageUser.language_id } }
        });
        if (!newMatternLanguageUser) {
            return new common_1.HttpException('Lenguaje o usuario no son válidos', common_1.HttpStatus.CONFLICT);
        }
        newMatternLanguageUser.matern_language = true;
        newMatternLanguageUser.status = true;
        return { message: "success", data: await this.languageUserRepository.save(newMatternLanguageUser) };
    }
    async selectLanguageNationalityUser(id, selectLanguageNationalityUser) {
        const userFound = await this.userRepository.findOne({ where: { id }, relations: ['nacionality'] });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const languageFound = await this.languageRepository.findOne({ where: { id: selectLanguageNationalityUser.language_id } });
        if (!languageFound) {
            return new common_1.HttpException('Lenguaje no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const nacionalityFound = await this.nacionalityRepository.findOne({ where: { id: selectLanguageNationalityUser.nationality_id } });
        if (!nacionalityFound) {
            return new common_1.HttpException('Nacionalidad no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const languageUserFound = await this.languageUserRepository.findOne({
            where: { matern_language: true, user: { id } },
        });
        if (languageUserFound) {
            languageUserFound.status = false;
            languageUserFound.matern_language = false;
            Promise.all([await this.languageUserRepository.save(languageUserFound)]);
            const newMatternLanguageUser = await this.languageUserRepository.findOne({
                where: { user: { id }, language: { id: selectLanguageNationalityUser.language_id } }
            });
            if (!newMatternLanguageUser) {
                userFound.nacionality = nacionalityFound;
                const newLanguageUser = this.languageUserRepository.create({
                    status: true,
                    matern_language: true,
                    language: { id: selectLanguageNationalityUser.language_id },
                    user: { id: id },
                });
                return { message: "success", data: [await this.languageUserRepository.save(newLanguageUser), await this.userRepository.save(userFound)] };
            }
            else {
                newMatternLanguageUser.matern_language = true;
                newMatternLanguageUser.status = true;
                userFound.nacionality = nacionalityFound;
                return { message: "success true", data: [await this.languageUserRepository.save(newMatternLanguageUser), await this.userRepository.save(userFound)] };
            }
        }
        else {
            return "no hay user language";
        }
    }
    async getInterestsUser(id) {
        const userFound = await this.userRepository.findOne({ where: { id } });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const interestsFound = await this.interestUserRepository.find({
            where: { status: true, user: { id } },
            relations: ['interest'],
        });
        return { message: "success", data: interestsFound };
    }
    async createSelectInterestUser(id) {
        const promesaIterestUser = [];
        const interests = await this.interestRepository.find();
        const interestUsersFound = await this.interestUserRepository.find({
            where: { user: { id } }
        });
        if (interestUsersFound.length === 0) {
            interests.forEach(async (e) => {
                const newInterestUser = this.interestUserRepository.create({
                    interest: { id: e.id },
                    user: { id: id },
                });
                promesaIterestUser.push(this.interestUserRepository.save(newInterestUser));
            });
            await Promise.all(promesaIterestUser);
            return { message: "success" };
        }
        else {
            return { message: "nothing" };
        }
    }
    async updateSelectInterestUser(id, interestUser) {
        const promesaObtencion = [];
        const interestUserFound = await this.interestUserRepository.find({
            where: {
                status: true,
                user: { id }
            }
        });
        interestUserFound.forEach(async (e) => {
            e.status = false;
            promesaObtencion.push(this.interestUserRepository.save(e));
        });
        await Promise.all(promesaObtencion);
        const promesasDeActualizacion = [];
        interestUser.forEach(async (e) => {
            const registroEncontrado = await this.interestUserRepository.findOne({
                where: { user: { id }, interest: { id: e.interest_id } },
            });
            if (registroEncontrado) {
                registroEncontrado.status = e.status;
                promesasDeActualizacion.push(this.interestUserRepository.save(registroEncontrado));
            }
        });
        await Promise.all(promesasDeActualizacion);
        return { message: "success" };
    }
    async getInappropriateContentUser(id) {
        const userFound = await this.userRepository.findOne({ where: { id } });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        const inappropriateFound = await this.inappropriateContentUserRepository.find({
            where: { status: true, user: { id } },
            relations: ['inappropriate_content'],
        });
        return inappropriateFound;
    }
    async createSelectInappropriateContentUser(id) {
        const promesaInappropriateContentUser = [];
        const inappropriateContent = await this.inappropriateContentRepository.find();
        const inappropriateContentUsersFound = await this.inappropriateContentUserRepository.find({
            where: { user: { id } }
        });
        if (inappropriateContentUsersFound.length === 0) {
            inappropriateContent.forEach(async (e) => {
                const newInappropriateContentUser = this.inappropriateContentUserRepository.create({
                    inappropiateContent: { id: e.id },
                    user: { id: id },
                });
                promesaInappropriateContentUser.push(this.inappropriateContentUserRepository.save(newInappropriateContentUser));
            });
            await Promise.all(promesaInappropriateContentUser);
            return { message: "success" };
        }
        else {
            return { message: "nothing" };
        }
    }
    async updateSelectInappropriateContentUser(id, inappropriateContentUser) {
        const promesaObtencion = [];
        const inappropriateContentUserFound = await this.inappropriateContentUserRepository.find({
            where: {
                status: true,
                user: { id }
            }
        });
        inappropriateContentUserFound.forEach(async (e) => {
            e.status = false;
            promesaObtencion.push(this.inappropriateContentUserRepository.save(e));
        });
        await Promise.all(promesaObtencion);
        const promesasDeActualizacion = [];
        inappropriateContentUser.forEach(async (e) => {
            const registroEncontrado = await this.inappropriateContentUserRepository.findOne({
                where: { user: { id }, inappropiateContent: { id: e.inappropriate_content_id } },
            });
            if (registroEncontrado) {
                registroEncontrado.status = e.status;
                promesasDeActualizacion.push(this.inappropriateContentUserRepository.save(registroEncontrado));
            }
        });
        await Promise.all(promesasDeActualizacion);
        return { message: 'success' };
    }
};
ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nacionality_entity_1.Nacionality)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(language_entity_1.Language)),
    __param(3, (0, typeorm_1.InjectRepository)(inappropriate_content_entity_1.InappropriateContent)),
    __param(4, (0, typeorm_1.InjectRepository)(interest_entity_1.Interest)),
    __param(5, (0, typeorm_1.InjectRepository)(language_user_entity_1.LanguageUser)),
    __param(6, (0, typeorm_1.InjectRepository)(interest_user_entity_1.InterestUser)),
    __param(7, (0, typeorm_1.InjectRepository)(inappropriate_content_user_entity_1.InappropriateContentUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ConfigurationService);
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map