"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const inappropriate_content_user_entity_1 = require("./entities/inappropriate_content_user.entity");
const interest_user_entity_1 = require("./entities/interest_user.entity");
const language_user_entity_1 = require("./entities/language_user.entity");
const configuration_controller_1 = require("./configuration.controller");
const configuration_service_1 = require("./configuration.service");
const language_entity_1 = require("../language/entities/language.entity");
const user_entity_1 = require("../users/entities/user.entity");
const nacionality_entity_1 = require("../nacionality/entities/nacionality.entity");
const inappropriate_content_entity_1 = require("../inappropriate-content/entities/inappropriate-content.entity");
const interest_entity_1 = require("../interest/entities/interest.entity");
let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inappropriate_content_user_entity_1.InappropriateContentUser, interest_user_entity_1.InterestUser, language_user_entity_1.LanguageUser, language_entity_1.Language, user_entity_1.User, nacionality_entity_1.Nacionality, inappropriate_content_entity_1.InappropriateContent, interest_entity_1.Interest])],
        controllers: [configuration_controller_1.ConfigurationController],
        providers: [configuration_service_1.ConfigurationService]
    })
], ConfigurationModule);
exports.ConfigurationModule = ConfigurationModule;
//# sourceMappingURL=configuration.module.js.map