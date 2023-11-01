"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NacionalityModule = void 0;
const common_1 = require("@nestjs/common");
const nacionality_service_1 = require("./nacionality.service");
const nacionality_controller_1 = require("./nacionality.controller");
const nacionality_entity_1 = require("./entities/nacionality.entity");
const typeorm_1 = require("@nestjs/typeorm");
let NacionalityModule = class NacionalityModule {
};
NacionalityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nacionality_entity_1.Nacionality])],
        controllers: [nacionality_controller_1.NacionalityController],
        providers: [nacionality_service_1.NacionalityService],
    })
], NacionalityModule);
exports.NacionalityModule = NacionalityModule;
//# sourceMappingURL=nacionality.module.js.map