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
exports.ConfigurationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const configuration_service_1 = require("./configuration.service");
const select_nacionality_user_dto_1 = require("./dto/select-nacionality-user.dto");
const select_nacionality_mattern_language_user_dto_1 = require("./dto/select-nacionality-mattern-language-user.dto");
const select_nacionality_language_dto_1 = require("./dto/select-nacionality-language.dto");
let ConfigurationController = class ConfigurationController {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    getLanguagesUser(id) {
        return this.configurationService.getLanguagesUser(id);
    }
    updateSelectLanguageUser(id, newLanguageUser) {
        return this.configurationService.updateSelectLanguageUser(id, newLanguageUser);
    }
    createSelectLanguageUser(id) {
        return this.configurationService.createSelectLanguageUser(id);
    }
    selectMatternLanguageUser(id, newSelectMatternLanguage) {
        return this.configurationService.selectMatternLanguage(id, newSelectMatternLanguage);
    }
    selectLanguageNationalityUser(id, newSelectNacionalityLanguageUser) {
        return this.configurationService.selectLanguageNationalityUser(id, newSelectNacionalityLanguageUser);
    }
    selectNacionalityUser(id, newSelectNacionalityUser) {
        return this.configurationService.selectNacionalityUser(id, newSelectNacionalityUser);
    }
    getInappropriateContentsUser(id) {
        return this.configurationService.getInappropriateContentUser(id);
    }
    updateSelectInappropriateContentUser(id, newInappropriateContentUser) {
        return this.configurationService.updateSelectInappropriateContentUser(id, newInappropriateContentUser);
    }
    createSelectInappropriateContentUser(id) {
        return this.configurationService.createSelectInappropriateContentUser(id);
    }
    getInterestsUser(id) {
        return this.configurationService.getInterestsUser(id);
    }
    updateSelectInterestUser(id, newInterestUser) {
        return this.configurationService.updateSelectInterestUser(id, newInterestUser);
    }
    createSelectInterestUser(id) {
        return this.configurationService.createSelectInterestUser(id);
    }
};
__decorate([
    (0, common_1.Get)('/language-user/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getLanguagesUser", null);
__decorate([
    (0, common_1.Post)('/language-user/:id'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "updateSelectLanguageUser", null);
__decorate([
    (0, common_1.Post)('/language-user/default/:id'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "createSelectLanguageUser", null);
__decorate([
    (0, common_1.Post)('language-user/mattern/:id'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, select_nacionality_mattern_language_user_dto_1.SelectNacionalityMatternLanguageUserDto]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "selectMatternLanguageUser", null);
__decorate([
    (0, common_1.Post)('user/:id/language-nacionality'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, select_nacionality_language_dto_1.SelectNacionalityLanguageUserDto]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "selectLanguageNationalityUser", null);
__decorate([
    (0, common_1.Post)(':id/nacionality'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, select_nacionality_user_dto_1.SelectNacionalityUserDto]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "selectNacionalityUser", null);
__decorate([
    (0, common_1.Get)('/inappropriate-content-user/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getInappropriateContentsUser", null);
__decorate([
    (0, common_1.Post)('/inappropriate-content-user/:id'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "updateSelectInappropriateContentUser", null);
__decorate([
    (0, common_1.Post)('/inappropriate-content-user/default/:id'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "createSelectInappropriateContentUser", null);
__decorate([
    (0, common_1.Get)('/interest-user/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getInterestsUser", null);
__decorate([
    (0, common_1.Post)('/interest-user/:id'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "updateSelectInterestUser", null);
__decorate([
    (0, common_1.Post)('/interest-user/default/:id'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConfigurationController.prototype, "createSelectInterestUser", null);
ConfigurationController = __decorate([
    (0, common_1.Controller)('configuration'),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], ConfigurationController);
exports.ConfigurationController = ConfigurationController;
//# sourceMappingURL=configuration.controller.js.map